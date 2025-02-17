import {Order} from "../../models/order.model";
import {Cart, CartOrder} from "../../controllers/types/types";
import {OrderItem} from "../../models/order_item.model";
import {sequelizeConnector} from "../../connectors/rdsConnector";
import ProductService from "../ProductService";
import {GroceryProducts} from "../../models/grocery_products.model";
import {GroceryProductUnits} from "../../models/grocery_product_units.model";

class CustomerService {
    private order: typeof Order
    private orderItem: typeof OrderItem
    protected productService: ProductService

    constructor(order: typeof Order, orderItem: typeof OrderItem) {
        this.order = order
        this.orderItem = orderItem
        this.productService = new ProductService(GroceryProducts, GroceryProductUnits)
    }

    async createCustomerOrder(body: CartOrder) {
        const itemsAndPrice = await this.getItemsAndPrice(body.cart)
        return await sequelizeConnector.transaction(async t => {
            const orderCreateResponse = await this.order.create({
                order_status: "CREATED",
                order_value: itemsAndPrice.reduce((acc, curr) => (acc + curr.total_item_value), 0.0),
                user_id: body.user_id,
            }, {transaction: t})

            const itemObj = itemsAndPrice.map((item) => {
                return {
                    order_id: orderCreateResponse.getDataValue("id"),
                    qty_ordered: item.noOfItems,
                    item_value: item.item_value,
                }
            })
            console.log(itemObj)
            const orderItemCreateResponse = await this.orderItem.bulkCreate(itemObj, {transaction: t})

            if (orderCreateResponse.dataValues && orderItemCreateResponse) {
                const updateResponse = await this.productService.updateInventory(body)
                console.log("Update Response", updateResponse)
            }

            return {
                order_id: orderCreateResponse.getDataValue("id")
            }
        })
    }

    async getItemsAndPrice(cart: Cart[]) {
        const items = []
        for (const cartItem of cart) {
            const isProductThere = await this.productService.isProductPresent(cartItem.item_sku)
            if (!isProductThere) {
                throw new Error("Product is not available")
            }
            if (isProductThere.getDataValue("units") < cartItem.units) {
                throw new Error("Low on quantity!, Please wait")
            }
            items.push({
                item_sku: cartItem.item_sku,
                noOfItems: cartItem.units,
                item_value: parseFloat(isProductThere.getDataValue("price") as unknown as string),
                total_item_value: parseFloat(isProductThere.getDataValue("price") as unknown as string) * cartItem.units
            })
        }
        return items
    }

}

export default CustomerService