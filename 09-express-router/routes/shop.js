const rootDir = require("../util/path");

const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (_req, res, _next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
