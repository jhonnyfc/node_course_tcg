const rootDir = require("../util/path");
const adminData = require("./admin");

const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (_req, res) => {
  const products = adminData.products;

  res.render("shop", { prods: products, docTitle: "My Shop", path: "/" });
});

module.exports = router;
