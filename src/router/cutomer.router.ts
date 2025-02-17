import express from "express";
import {CustomerController} from "../controllers/customer.controller";
import CustomerService from "../services/CustomerService";
import {Order} from "../models/order.model";
import {OrderItem} from "../models/order_item.model";

const CustomerRouter = express.Router();
let customerService = new CustomerService(Order, OrderItem)

const customerController = new CustomerController(customerService)

CustomerRouter.post("/order", async (req, res, next) => {
    return customerController.createOrder(req, res)
})
export default CustomerRouter