import express from "express";
import {setupRoutes} from "./router";

const app = express();
const PORT = process.env.PORT || 3000
// Middleware to parse JSON
app.use(express.json());

// Register routes using the imported function
setupRoutes(app)

// Start the server
app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
