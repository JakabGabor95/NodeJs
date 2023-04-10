const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

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

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 not found</h1>");
});

const server = http.createServer(app);

server.listen(3000);
