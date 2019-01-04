// imports
const express = require("express");
const bodyParser = require("body-parser");
const v1 = require("./app/routers/v1");

// PORT
const port = process.env.PORT || 8080;

// app instantiation
const app = express();

// routing and middlewares
app.use(bodyParser.json());
app.use("/api/v1", v1(express));

// server starts
app.listen(port, function() {
    console.log("Api Server running at port 8080")
})

// export for test (chai-http)
module.exports = app;