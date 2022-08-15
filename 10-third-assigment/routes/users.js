const rootDir = require("../util/path");

const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/user", (_req, res) => {
  res.sendFile(path.join(rootDir, "views", "user.html"));
});

module.exports = router;
