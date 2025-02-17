import express from "express";
import {UserController} from "../controllers/user.controller";

const UserRouter = express.Router();
const userController = new UserController()

UserRouter.get("/users", async (req, res, next) => {
})
export default UserRouter