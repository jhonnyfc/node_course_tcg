const adminData = require("./admin");

const express = require("express");
const router = express.Router();

router.get("/", (_req, res) => {
  const products = adminData.products;

  res.render("shop", {
    prods: products,
    docTitle: "My Shop",
    path: "/",
    isProductsFill: products.length > 0,
    isAactiveShop: true,
  });
});

module.exports = router;
