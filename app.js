const express = require("express");
const pictureRoute = require("./routes/pictureRoute");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use("/", pictureRoute);

module.exports = app;
