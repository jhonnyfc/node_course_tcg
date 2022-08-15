const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./util/path");

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views"); // defualt ./views

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((_req, res) => {
  res.status(404).render("404_page", { pageTitle: "not found" });
});

app.listen(12345);
