import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", function (req, res) {
  res.send(data.products);
});

app.get("/", function (req, res) {
  res.send("Server is ready vot");
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Server at port " + port);
});
