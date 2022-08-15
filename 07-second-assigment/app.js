const express = require("express");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("hola");
//   next();
// });

// app.use("/", (req, res) => {
//   console.log("hola2");
//   res.send("hola <b>end</b>");
// });

app.use("/users", (req, res, next) => {
  es.send("hola <b>dummy1</b>");
});

app.use("/", (req, res) => {
  res.send("hola <b>dummy2</b>");
});

app.listen(12345);
