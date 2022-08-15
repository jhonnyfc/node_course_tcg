const rootPath = require("../util/path");
const Cart = require("./cart");

const fs = require("fs");
const path = require("path");

const dataPath = path.join(rootPath, "data", "products.json");

const getProductsFromFile = (callBack) => {
  fs.readFile(dataPath, (err, fileContent) => {
    if (err) {
      callBack([]);
    } else {
      callBack(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price, id = undefined) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = Number(price);
    this.id = id ? id : Math.random().toString();
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(dataPath, JSON.stringify(products), (saveErr) => {
        console.log(`${saveErr} - admin save prod id ${this.id}`);
      });
    });
  }
  updateProduct() {
    getProductsFromFile((products) => {
      const oldProductindex = products.findIndex(
        (productElem) => productElem.id === this.id
      );

      if (isNaN(oldProductindex)) {
        return;
      }

      const oldProduct = products[oldProductindex];

      products[oldProductindex] = { ...oldProduct, ...this };

      fs.writeFile(dataPath, JSON.stringify(products), (saveErr) => {
        console.log(`${saveErr} - admin update prod id ${this.id}`);
      });
    });
  }
  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }
  static findById(id, callBack) {
    getProductsFromFile((products) => {
      const product = products.find((product) => product.id === id);
      callBack(product);
    });
  }
  static deleteProduct(id, callBack) {
    getProductsFromFile((products) => {
      const productToDelte = products.find((prod) => prod.id === id);
      const prodPrice = productToDelte.price;
      const updatedProducts = products.filter((product) => product.id !== id);

      fs.writeFile(dataPath, JSON.stringify(updatedProducts), (saveErr) => {
        if (!saveErr) {
          Cart.deleteDeletedProduct(id, prodPrice, callBack);
        } else {
          callBack();
        }
        console.log(`${saveErr} - admin delete prod id ${id}`);
      });
    });
  }
};
