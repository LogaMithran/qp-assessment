import {Request, Response} from "express"
import CustomerService from "../services/CustomerService";
import {CartOrder} from "./types/types";

export class CustomerController {
    private customerService: CustomerService

    constructor(customerService: CustomerService) {
        this.customerService = customerService
    }

    async createOrder(req: Request, res: Response) {
        try {
            const response = await this.customerService.createCustomerOrder(req.body as unknown as CartOrder)
            res.status(201).send(response)
        } catch (e: any) {
            console.log(JSON.stringify(e))
            res.status(500).json({
                message: e.message
            })
        }
    }
}