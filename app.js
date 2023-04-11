const path = require("path");
const http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
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

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

const server = http.createServer(app);

server.listen(3000);
