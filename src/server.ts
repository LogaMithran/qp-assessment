import express from 'express';
import morgan from 'morgan';

import HealthRouter from "./router/health.router";
import UserRouter from "./router/user.router";
import ProductRouter from "./router/products.router";
import CustomerRouter from "./router/cutomer.router";

import "./models/associations"
import {sequelizeConnector} from "./connectors/rdsConnector";

const app = express();
const PORT = process.env.PORT || 3000;
const apiVersion = 'v1'

sequelizeConnector.sync({alter: true}).then((res) => {
    console.log("Sync done")
}).catch((err) => {
    console.log(err)
})

// Middleware to parse JSON and log requests
app.use(express.json());
app.use(morgan('dev'));

// Register routes using the imported function
app.use(`/${apiVersion}`, HealthRouter)
app.use(`/${apiVersion}/products`, ProductRouter)
app.use(`/${apiVersion}/admin`, UserRouter)
app.use(`/${apiVersion}/customer`, CustomerRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
