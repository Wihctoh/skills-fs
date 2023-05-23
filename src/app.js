const express = require("express");
const bodyParser = require("body-parser");
const environmentRouter = require("./controller/environment.controller");

const app = express();

app.use(bodyParser.json());
app.use("/environment", environmentRouter);
app.use((err, req, res, next) => res.send(err.message));

module.exports = app;
