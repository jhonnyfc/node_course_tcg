const http = require("http");
const express = require("express");

const app = express();

//some middleware we can add as much as we want
app.use("/add-pro", (req, res, next) => {
  console.log("middelwere0");
  res.send("Hello <b>o1o</b>");
  // next();
});

app.use("/", (req, res, next) => {
  console.log("middelwere");
  res.send("Hello <b>o2o</b>");
  // next();
});

app.listen(12345);
