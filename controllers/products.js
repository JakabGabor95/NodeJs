const path = require("path");
const rootDir = require("../util/path");
const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  //res.render("shop", { prods: products, docTitle: "Shop" });
  const products = Product.fetchAll();
  console.log(products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
