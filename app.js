const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello! Node.js CI/CD deployment successful!");
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

module.exports = app;
