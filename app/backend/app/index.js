"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dotenv = require("dotenv");
dotenv.config();
var PORT = process.env.PORT;
var app = express();
app.listen(PORT, function () { return "Express Server running on PORT ".concat(PORT, "."); });
app.get("/", function (req, res) {
    console.log(PORT);
    res.send(200);
});
