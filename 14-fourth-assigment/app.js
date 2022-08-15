const path = require("path");
const users = require("./routes/users");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
// app.set("views", "views"); defualt ./views

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(users);
app.use("/", (_req, res) => {
  res.status(404).send("<h1>Not found ?A¿3jon </h1>");
});

app.listen(12345);
