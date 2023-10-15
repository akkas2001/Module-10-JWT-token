const express = require("express");
const router = require("./src/routes/api");

const app = new express();

////security middleware

const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const mongoose = require("mongoose");

let URI = "mongodb://127.0.0.1:27017/CRUD";
    
////mongodb connection

mongoose.connect(URI).then((res) => {
    console.log("mongodb connected");
    }).catch((error) => {
    console.log("mongodb not connected",error);
    });

////middleware Implements

app.use(cors());
app.use(xss());
app.use(mongoSanitize());
app.use(helmet());
app.use(express.json());

const limiter = rateLimit({
    windows:15*60*1000,
    max:3000
});

app.use(limiter);

///routing
app.use("/api/v1", router);

app.use("*", (req, res) => {
    res.status(404).json({
        status: "fail",
        data: "pafe not found"
    });
});


module.exports = app;