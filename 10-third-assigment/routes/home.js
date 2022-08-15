const rootDir = require("../util/path");

const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/", (_req, res) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = router;
