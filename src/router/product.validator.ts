import {Request, Response, NextFunction} from "express";
import {
    GroceryProductUnitAttributes,
    GroceryProductUnitCreationAttributes
} from "../models/grocery_product_units.model";

export const validateProductBody = (requiredFields: string[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        if (Object.keys(req.body).length < 1) {
            res.status(500).json({message: "Cannot process empty body"})
        }

        for (let field of requiredFields) {
            if (!req.body[field]) {
                res.status(400).json({message: `${field} is missing`});
            }
        }
        const units = req?.body?.product_units
        if (units.length !== (units.filter((unit: GroceryProductUnitAttributes) => unit.units > 0)).length) {
            res.status(400).json({message: `Product unit stock should be 1 atleast`});
        }
        next()
    }
}