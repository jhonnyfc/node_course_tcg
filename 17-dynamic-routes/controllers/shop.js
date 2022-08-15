const Product = require("../models/product");
const navigationRoutes = require("../shared/constants/navigationRoutes");
const Cart = require("../models/cart");

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

exports.getProduct = (req, res) => {
  const productId = req.params.productId;
  Product.findById(productId, (product) => {
    res.render(navigationRoutes.productDetail.view, {
      product,
      pageTitle: "ProdDetail" + product.title,
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
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      products.forEach((product) => {
        const cartProductData = cart.products.find(
          (cartProd) => cartProd.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      });

      res.render(navigationRoutes.cart.view, {
        cartProducts: cartProducts,
        totalPrice: cart.totalPrice,
        pageTitle: "Your Cart",
        pathName: navigationRoutes.cart.name,
        navigationRoutes,
      });
    });
  });
};

exports.postCart = (req, res) => {
  const productId = req.body.productId;
  Product.findById(productId, (product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect(navigationRoutes.cart.path);
};

exports.postCartDelete = (req, res) => {
  const productId = req.body.productId;
  Product.findById(productId, (product) => {
    Cart.deleteProduct(productId, product.price, () => {
      res.redirect(navigationRoutes.cart.path);
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
