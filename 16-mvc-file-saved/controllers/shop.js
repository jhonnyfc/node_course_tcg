const Product = require("../models/product");
const navigationRoutes = require("../shared/constants/navigationRoutes");

exports.getProducts = (_req, res) => {
  Product.fetchAll((products) => {
    res.render(navigationRoutes.products.view, {
      prods: products,
      pageTitle: "My Shop",
      isProductsFill: products.length > 0,
      pathName: navigationRoutes.products.name,
      navigationRoutes,
    });
  });
};

exports.getIndex = (_req, res) => {
  Product.fetchAll((products) => {
    res.render(navigationRoutes.index.view, {
      prods: products,
      pageTitle: "My Index",
      pathName: navigationRoutes.index.name,
      navigationRoutes,
    });
  });
};

exports.getCart = (_req, res) => {
  Product.fetchAll((products) => {
    res.render(navigationRoutes.cart.view, {
      prods: products,
      pageTitle: "Your Cart",
      pathName: navigationRoutes.cart.name,
      navigationRoutes,
    });
  });
};

exports.getOrders = (_req, res) => {
  Product.fetchAll((products) => {
    res.render(navigationRoutes.orders.view, {
      prods: products,
      pageTitle: "Your Cart",
      pathName: navigationRoutes.orders.name,
      navigationRoutes,
    });
  });
};

exports.getCheckout = (_req, res) => {
  Product.fetchAll((products) => {
    res.render(navigationRoutes.checkout.view, {
      prods: products,
      pageTitle: "Your Checkout",
      pathName: navigationRoutes.checkout.name,
      navigationRoutes,
    });
  });
};
