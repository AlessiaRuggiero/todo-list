const express = require("express");
const cors = require("cors");
const connectDb = require("./dbConfiguration/connection");
require("dotenv").config({ path: "../.env" }); // .env should be in root dir

const app = express();
app.use(express.json()); // Parses JSON data
app.use(cors()); // Enables all CORS requests

// Establishes database connection --> see dbConnection file
connectDb();

// Routing middleware --> see taskRoutes + taskController files
app.use("/tasks", require("./taskRoutes"));

// Initiates server
const port = process.env.PORT;
app.listen(port, () => console.log(`Server started on port ${port}...`));
