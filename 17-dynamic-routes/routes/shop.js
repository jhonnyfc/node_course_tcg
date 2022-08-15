const shopController = require("../controllers/shop");
const navigationRoutes = require("../shared/constants/navigationRoutes");

const express = require("express");
const router = express.Router();

router.get(navigationRoutes.index.path, shopController.getIndex);

router.get(navigationRoutes.products.path, shopController.getProducts);

router.get(navigationRoutes.productDetail.path, shopController.getProduct);

router.get(navigationRoutes.cart.path, shopController.getCart);

router.post(navigationRoutes.cart.path, shopController.postCart);

router.post(navigationRoutes.cartDelete.path, shopController.postCartDelete);

router.get(navigationRoutes.orders.path, shopController.getOrders);

router.get(navigationRoutes.checkout.path, shopController.getCheckout);

module.exports = router;
