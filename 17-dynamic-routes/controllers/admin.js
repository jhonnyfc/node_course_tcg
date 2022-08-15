const Product = require("../models/product");
const navigationRoutes = require("../shared/constants/navigationRoutes");

exports.getAddProductPage = (_req, res, _next) => {
  res.render(navigationRoutes.adminAddProduct.view, {
    pageTitle: "Add product",
    pathName: navigationRoutes.adminAddProduct.name,
    navigationRoutes,
    isEditMode: false,
  });
};

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect(navigationRoutes.adminGetProducts.goPath);
};

exports.getEditProductPage = (req, res, _next) => {
  const isEditMode = req.query.isEditMode;
  const productId = req.params.productId;

  if (!isEditMode) {
    res.redirect("/");
  }

  Product.findById(productId, (product) => {
    if (!product) {
      res.redirect("/");
    }

    res.render(navigationRoutes.adminEditProduct.view, {
      pageTitle: "Edit product",
      pathName: navigationRoutes.adminEditProduct.name,
      navigationRoutes,
      isEditMode,
      product: product,
    });
  });
};

exports.postEditProduct = (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price, id);

  product.updateProduct();

  res.redirect(`${navigationRoutes.productDetail.goPath}/${id}`);
};

exports.postDeleteProduct = (req, res) => {
  const productId = req.body.productId;

  Product.deleteProduct(productId, () => {
    res.redirect(navigationRoutes.adminGetProducts.path);
  });
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
