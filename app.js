const http = require("http");
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("object");
  next();
});

app.use((req, res, next) => {
  console.log("object2");
  res.send("<h1>Hello from express</h1>");
});

const server = http.createServer(app);

server.listen(3000);
