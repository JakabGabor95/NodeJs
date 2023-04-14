const path = require("path");
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const errorController = require("./controllers/error");

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
app.engine("handlebars", expressHbs());
app.set("view engine", "handlebars");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

const server = http.createServer(app);

server.listen(3000);
