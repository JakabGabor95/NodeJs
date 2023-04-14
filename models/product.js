const fs = require("fs");
const path = require("path");

const getProductsFromFile = (cb) => {
  const productJsonPath = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );

  fs.readFile(productJsonPath, (err, fileContent) => {
    if (err) {
      callBack([]);
    }

    callBack(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const productJsonPath = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );

    fs.readFile(productJsonPath, (err, fileContent) => {
      let products = [];
      if (!err) {
        console.log(fileContent);
        products = JSON.parse(fileContent);
      }

      products.push(this);
      fs.writeFile(productJsonPath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(callBack) {
    getProductsFromFile(callBack);
  }
};
