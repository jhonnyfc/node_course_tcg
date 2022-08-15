class NavigationRoutes {
  get index() {
    return { path: "/", name: "shopIndex", view: "shop/index" };
  }

  get products() {
    return { path: "/products", name: "products", view: "shop/product-list" };
  }

  get cart() {
    return { path: "/cart", name: "cart", view: "shop/cart" };
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
      name: "addProduct",
      view: "admin/add-product",
    };
  }

  get adminGetProducts() {
    return { path: "/products", name: "adminProducts", view: "admin/products" };
  }
}

module.exports = new NavigationRoutes();
