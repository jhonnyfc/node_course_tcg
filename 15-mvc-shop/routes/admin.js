const productsController = require("../controllers/product");

const express = require("express");

const router = express.Router();

router.get("/add-product", productsController.getAddProductPage);

router.post("/add-product", productsController.postAddProduct);

module.exports = router;
