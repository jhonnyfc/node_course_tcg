const rootDir = require("../util/path");

const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/add-product", (_req, res, _next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
