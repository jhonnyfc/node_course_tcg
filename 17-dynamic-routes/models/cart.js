const rootPath = require("../util/path");

const fs = require("fs");
const path = require("path");

const dataPath = path.join(rootPath, "data", "cart.json");

const getCartFromFile = (callBack) => {
  fs.readFile(dataPath, (err, fileContent) => {
    if (err) {
      callBack({ products: [], totalPrice: 0 });
    } else {
      callBack(JSON.parse(fileContent));
    }
  });
};

module.exports = class Cart {
  static addProduct(id, productPrice) {
    getCartFromFile((cart) => {
      const existingProductIndex = cart.products.findIndex(
        (product) => product.id == id
      );
      const existingProduct = cart.products[existingProductIndex];

      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty++;
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      cart.totalPrice += productPrice;

      fs.writeFile(dataPath, JSON.stringify(cart), (saveErr) => {
        console.log(`${saveErr} - cart add prod id ${id}`);
      });
    });
  }

  static deleteProduct(id, price, callBack) {
    getCartFromFile((cart) => {
      const product = cart.products.find((prod) => prod.id === id);

      if (!product) {
        callBack();
        return;
      }

      cart.totalPrice = cart.totalPrice - price;
      if (product.qty > 1) {
        product.qty--;
      } else {
        cart.products = cart.products.filter((prod) => prod.id !== id);
      }

      fs.writeFile(dataPath, JSON.stringify(cart), (saveErr) => {
        console.log(`${saveErr} - cart delte one prod id ${id}`);
      });

      callBack();
    });
  }

  static deleteDeletedProduct(id, price, callBack) {
    getCartFromFile((cart) => {
      const product = cart.products.find((prod) => prod.id === id);

      if (!product) {
        callBack();
        return;
      }

      cart.totalPrice = cart.totalPrice - product.qty * price;
      cart.products = cart.products.filter((prod) => prod.id !== id);

      fs.writeFile(dataPath, JSON.stringify(cart), (saveErr) => {
        console.log(`${saveErr} - cart delte all prod id ${id}`);
      });

      callBack();
    });
  }

  static getCart(callBack) {
    getCartFromFile((cart) => {
      callBack(cart);
    });
  }
};
