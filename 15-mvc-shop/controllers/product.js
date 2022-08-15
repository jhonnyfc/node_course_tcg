const Product = require("../models/product");

exports.getAddProductPage = (_req, res, _next) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "addProduct",
  });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (_req, res) => {
  const products = Product.fetchAll();

  res.render("shop", {
    prods: products,
    pageTitle: "My Shop",
    isProductsFill: products.length > 0,
    path: "shop",
  });
};
