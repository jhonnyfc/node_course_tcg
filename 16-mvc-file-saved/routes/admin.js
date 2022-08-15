const adminController = require("../controllers/admin");
const navigationRoutes = require("../shared/constants/navigationRoutes");

const express = require("express");

const router = express.Router();

router.get(
  navigationRoutes.adminAddProduct.path,
  adminController.getAddProductPage
);

router.post(
  navigationRoutes.adminAddProduct.path,
  adminController.postAddProduct
);

router.get(navigationRoutes.adminGetProducts.path, adminController.getProducts);

module.exports = router;
