const fs = require("fs");
const path = require("path");
const productJsonPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (callBack) => {
  fs.readFile(productJsonPath, (err, fileContent) => {
    if (err) {
      return callBack([]);
    } else {
      callBack(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
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
