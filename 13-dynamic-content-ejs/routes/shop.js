const adminData = require("./admin");

const express = require("express");
const router = express.Router();

router.get("/", (_req, res) => {
  const products = adminData.products;

  res.render("shop", {
    prods: products,
    pageTitle: "My Shop",
    isProductsFill: products.length > 0,
    path: "shop",
  });
});

module.exports = router;
