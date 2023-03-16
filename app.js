const express = require("express");
const pictureRoute = require("./routes/pictureRoute");
const app = express();
app.use(express.json());
app.use("/", pictureRoute);

module.exports = app;
