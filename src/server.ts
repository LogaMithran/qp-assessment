import express from "express";
import {setupRoutes} from "./router";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Register routes using the imported function
setupRoutes(app)

// Start the server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
