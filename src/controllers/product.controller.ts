import {Request, Response, NextFunction} from "express"
import GroceryProductService from "../services/ProductService";
import {ProductBody} from "./types/types";

export class ProductController {
    private groceryProductService: GroceryProductService;

    constructor(
        groceryProductService: GroceryProductService,
    ) {
        this.groceryProductService = groceryProductService;
    }

    async getProducts(req: Request, res: Response) {
        const result = await this.groceryProductService.getProduct(req)
        res.status(200).json({
            "result": result
        })
    }


    public async createProduct(req: Request, res: Response) {
        try {
            const productBody: ProductBody = req.body
            const insertProductResponse = await this.groceryProductService.createProduct(productBody)

            res.status(201).json({
                grocery_product: insertProductResponse,
            })
        } catch (e: any) {
            console.log(e)
            res.status(500).send({message: e.message})
        }
    }

    public async updateProduct(req: Request, res: Response) {
        try {
            const productBody: ProductBody = req.body
            if (productBody.product_units.length > 1) {
                return res.status(400).json({message: "Only one unit can be updated at a time"})
            }
            const updateProductResponse = await this.groceryProductService.updateProduct(req.params.product_id, productBody)
            res.status(204).json({
                grocery_product: updateProductResponse,
            })
        } catch (e: any) {
            res.status(500).send({message: e.message})
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            const deleteResponse = await this.groceryProductService.deleteProduct(req, res)
            console.log(deleteResponse)
            res.status(204).json({
                grocery_product: deleteResponse,
            })
        } catch (e: any) {
            res.status(500).send({message: e.message})
        }
    }
}
