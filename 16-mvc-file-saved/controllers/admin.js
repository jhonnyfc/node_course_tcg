const Product = require("../models/product");
const { adminAddProduct } = require("../shared/constants/navigationRoutes");
const navigationRoutes = require("../shared/constants/navigationRoutes");

exports.getAddProductPage = (_req, res, _next) => {
  res.render(navigationRoutes.adminAddProduct.view, {
    pageTitle: "Add product",
    pathName: navigationRoutes.adminAddProduct.name,
    navigationRoutes,
  });
};

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect(navigationRoutes.adminGetProducts.path);
};

exports.getProducts = (_req, res) => {
  Product.fetchAll((products) => {
    res.render(navigationRoutes.adminGetProducts.view, {
      prods: products,
      pageTitle: "My Shop",
      isProductsFill: products.length > 0,
      pathName: navigationRoutes.adminGetProducts.name,
      navigationRoutes,
    });
  });
};
