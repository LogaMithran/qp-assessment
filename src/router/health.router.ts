import express, {NextFunction, Request, Response} from "express";
import {HttpCodes} from "../utils/httpCodes";

const HealthRouter = express.Router();

HealthRouter.get("/ping", (req: Request, res: Response, next: NextFunction) => {
        res.status(HttpCodes.SUCCESS.OK).json({message: "Pong"});
    }
)

export default HealthRouter