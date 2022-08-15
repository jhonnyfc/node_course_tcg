const express = require("express");

const products = [];

const router = express.Router();

router.get("/add-product", (_req, res, _next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "addProduct",
  });
});

router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports.routes = router;
module.exports.products = products;
