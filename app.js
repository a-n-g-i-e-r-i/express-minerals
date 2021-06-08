// Dependencies
const express = require("express");

// Configuration
const app = express();

// Routes
app.get("/", (req, res) => {
    res.send(
        "Welcome to the Express Minerals App!"
        );
});

// Export
module.exports = app;