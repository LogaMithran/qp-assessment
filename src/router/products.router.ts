import {
    ProductController,
} from "../controllers/product.controller";
import {Router, Response, Request} from 'express';
import {validateProductBody} from "./product.validator";
import GroceryProductService from "../services/ProductService";
import {GroceryProducts} from "../models/grocery_products.model";
import {GroceryProductUnits} from "../models/grocery_product_units.model";

const requiredFields = ["product_name", "product_units"]
let groceryProductService = new GroceryProductService(GroceryProducts, GroceryProductUnits)

const ProductRouter = Router();
const productController = new ProductController(groceryProductService);

ProductRouter.get("/", async (req, res) => {
    return productController.getProducts(req, res)
})

ProductRouter
    .post("/", [validateProductBody(requiredFields)],
        async (req: Request, res: Response) => {
            return productController.createProduct(req, res)
        })

ProductRouter.put("/:product_id", async (req, res, next) => {
    await productController.updateProduct(req, res);
});

ProductRouter.delete("/:product_id", async (req, res, next) => {
    await productController.deleteProduct(req, res)
})

export default ProductRouter