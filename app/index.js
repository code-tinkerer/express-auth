const express = require("express");

const app = express();

app.use(require("./controllers"));

module.exports = app;
