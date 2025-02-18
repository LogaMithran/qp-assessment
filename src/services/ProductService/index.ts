import {
    GroceryProducts,
    GroceryProductsAttributes, GroceryProductsCreationAttributes
} from "../../models/grocery_products.model";
import {Op, Sequelize} from "sequelize";
import {sequelizeConnector} from "../../connectors/rdsConnector";
import {
    GroceryProductUnitAttributes,
    GroceryProductUnitCreationAttributes,
    GroceryProductUnits
} from "../../models/grocery_product_units.model";
import {CartOrder, ProductBody} from "../../controllers/types/types";
import {Request, Response} from "express"

class GroceryProductService {
    private groceryProducts: typeof GroceryProducts
    private groceryUnit: typeof GroceryProductUnits

    constructor(groceryProducts: typeof GroceryProducts, groceryUnit: typeof GroceryProductUnits) {
        this.groceryProducts = groceryProducts
        this.groceryUnit = groceryUnit
    }

    async getProduct(req: Request) {
        let limit = 10,
            page = 1
        const {product_name} = req.body
        let whereCondition: any = {
            is_deleted: {[Op.eq]: null}
        }
        const where = () => {
            if (product_name) {
                whereCondition = {
                    ...whereCondition,
                    product_name: product_name
                }
            }
            return whereCondition
        }
        if (req.query.limit) limit = parseInt(req.query.limit as string)
        if (req.query.page) page = parseInt(req.query.page as string)

        return await this.groceryProducts.findAndCountAll({
            where: where(),
            include: [{model: this.groceryUnit, as: "units"}],
            limit: limit,
            offset: (page - 1) * limit
        })
    }

    async createProduct(body: ProductBody) {
        return sequelizeConnector.transaction(async t => {
            let isProductAlreadyPresent = await this.groceryProducts.findOne({
                where:
                    {product_name: body.product_name},
                attributes: ["id"]
            })
            if (isProductAlreadyPresent?.getDataValue("id") && isProductAlreadyPresent?.getDataValue("is_deleted") === null) {
                throw new Error("Product is already there")
            }
            const isDeleted = isProductAlreadyPresent?.getDataValue("is_deleted");
            const productId = isProductAlreadyPresent?.getDataValue("id");

            if (isDeleted !== null && productId !== undefined) {
                return await this.enableProductAgain(productId);
            }

            const productInsertResponse = await this.groceryProducts.create({
                product_name: body.product_name,
                category: body.category,
            }, {transaction: t})

            let bulkObj: GroceryProductUnitCreationAttributes[] = []
            body.product_units.forEach((unit) => {
                bulkObj.push({
                    item_sku: unit.item_sku,
                    units: unit.units,
                    expiry: unit.expiry,
                    product_id: productInsertResponse?.getDataValue("id"),
                    price: unit.price,
                    unit_category: unit.unit_category
                })
            })

            const unitInsertResponse = await this.groceryUnit.bulkCreate(bulkObj, {transaction: t})

            return [productInsertResponse, unitInsertResponse]
        })
    }

    async updateProduct(productId: string, product: ProductBody) {
        return await sequelizeConnector.transaction(async t => {
            let groceryProduct = await this.groceryProducts.findOne({
                where: {
                    id: productId
                }
            })
            if (groceryProduct?.getDataValue("id") === null || groceryProduct?.getDataValue("id") === undefined) {
                throw new Error("Product is not there")
            }

            const updateProductResponse = await this.groceryProducts.update({
                product_name: product.product_name,
                category: product.category,
                updatedAt: new Date()
            }, {where: {id: groceryProduct.getDataValue("id")}});


            const {price, units, item_sku, unit_category} = product.product_units[0]
            let unit = await this.groceryUnit.findOne({
                where: {product_id: productId},
                attributes: ["id"]
            })
            const unitUpdateResponse = await this.groceryUnit.update({
                price: price,
                units: units
            }, {where: {id: unit?.getDataValue("id")}})

            return [updateProductResponse, unitUpdateResponse]
        })
    }

    async deleteProduct(req: Request, res: Response) {
        const productId = req?.params?.product_id
        if (productId) {
            return await sequelizeConnector.transaction(async t => {
                let groceryProduct = await this.groceryProducts.findOne({
                    where: {
                        id: productId
                    },
                    attributes: ["id"]
                })
                if (groceryProduct?.getDataValue("id") === null || groceryProduct?.getDataValue("id") === undefined) {
                    throw new Error("Product is not there")
                }

                const updateProductResponse = await this.groceryProducts.update({
                    is_deleted: new Date()
                }, {where: {id: groceryProduct.getDataValue("id")}});

                const unitUpdateResponse = await this.groceryUnit.update({
                    is_deleted: new Date()
                }, {where: {product_id: groceryProduct?.getDataValue("id")}})

                return [updateProductResponse, unitUpdateResponse]
            })
        }
    }

    async updateInventory(payload: CartOrder) {
        return await sequelizeConnector.transaction(async t => {
            for (const cart of payload.cart) {
                const groceryUnit = await this.getGroceryUnit(cart.item_sku)
                const availableUnits = groceryUnit?.getDataValue("units")
                return await this.groceryUnit.update({
                    units: (availableUnits && availableUnits - cart.units)
                }, {where: {id: groceryUnit?.getDataValue("id")}})

            }
        })
    }

    async getGroceryUnit(itemSku: string) {
        return await this.groceryUnit.findOne({
            where: {
                item_sku: itemSku
            },
        })
    }

    async isProductPresent(itemSku: string) {
        return await this.groceryUnit.findOne({
            where: {
                item_sku: itemSku
            },
        })
    }

    async enableProductAgain(productId: number) {
        return await sequelizeConnector.transaction(async t => {
            const updateProductResponse = await this.groceryProducts.update({
                is_deleted: null,
                updatedAt: new Date()
            }, {where: {id: productId}, transaction: t});

            const unitUpdateResponse = await this.groceryUnit.update({
                is_deleted: null,
            }, {where: {product_id: productId}})

            return [updateProductResponse, unitUpdateResponse]
        })
    }
}

export default GroceryProductService