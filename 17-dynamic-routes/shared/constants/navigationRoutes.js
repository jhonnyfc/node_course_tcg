const products = "/products";

class NavigationRoutes {
  get index() {
    return { path: "/", name: "shopIndex", view: "shop/index" };
  }

  get products() {
    return { path: products, name: "products", view: "shop/product-list" };
  }

  get productDetail() {
    return {
      path: `${products}/:productId`,
      name: "productDetail",
      view: "shop/product-detail",
      goPath: products,
    };
  }

  get cart() {
    return { path: "/cart", name: "cart", view: "shop/cart" };
  }

  get cartDelete() {
    return { path: "/cart-delete-item", name: "cartDelete" };
  }

  get orders() {
    return { path: "/orders", name: "orders", view: "shop/orders" };
  }

  get checkout() {
    return { path: "/checkout", name: "checkout", view: "shop/checkout" };
  }

  get adminAddProduct() {
    return {
      path: "/add-product",
      name: "adminProduct",
      view: "admin/add-product",
      postPath: "/admin/add-product",
    };
  }

  get adminEditProduct() {
    return {
      path: "/edit-product/:productId",
      name: "editProduct",
      view: "admin/edit-product",
      postPath: "/edit-product",
      postRoute: "/admin/edit-product",
    };
  }

  get adminDeleteProduct() {
    return {
      path: "/delete-product",
      name: "deleteProduct",
      postRoute: "/admin/delete-product",
    };
  }

  get adminGetProducts() {
    return {
      path: products,
      name: "adminProducts",
      view: "admin/products",
      goPath: `/admin${products}`,
    };
  }
}

module.exports = new NavigationRoutes();
