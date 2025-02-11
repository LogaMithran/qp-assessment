import express, {Express, NextFunction, Request, Response, Router} from "express";
import {HttpCodes} from "../utils/httpCodes";

const router: Router = express.Router();

const Ping = (req: Request, res: Response, next: NextFunction) => {
    res.status(HttpCodes.SUCCESS.OK).json({message: "Pong"});
};

router.get("/ping", Ping);

export const setupRoutes = (app: Express) => {
    // Define routes within this function
    app.use('/v1', router);
};