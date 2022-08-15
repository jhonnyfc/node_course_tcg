const rootPath = require("../util/path");

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
  constructor(title, imgUrl, description, price) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(dataPath, JSON.stringify(products), (saveErr) => {
        console.log(saveErr);
      });
    });
  }
  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }
};
