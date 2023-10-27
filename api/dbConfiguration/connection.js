const mongoose = require("mongoose");

function dbConnection() {
    mongoose
        .connect(process.env.CONNECTION_STRING, {
            // Using new MongoDB connection management engine
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("Database connection ESTABLISHED"))
        .catch(console.error);
}

module.exports = dbConnection;
