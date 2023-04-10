const http = require("http");
const express = require("express");
const app = express();

//Middleware
/* app.use((req, res, next) => {
  console.log("object");
  next();
}); */

/* app.use("/", (req, res, next) => {
  console.log("This always run");
  next();
});
 */
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submbit">add</button>The add product page</form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from express</h1>");
});

const server = http.createServer(app);

server.listen(3000);
