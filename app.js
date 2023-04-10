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

app.use(adminRoutes);
app.use(shopRoutes);

const server = http.createServer(app);

server.listen(3000);
