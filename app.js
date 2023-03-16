const express = require("express");
const pictureRoute = require("./routes/pictureRoute");
const app = express();

app.use("/", pictureRoute);

module.exports = app;
