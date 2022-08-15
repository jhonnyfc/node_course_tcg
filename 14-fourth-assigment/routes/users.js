const express = require("express");

const routes = express.Router();

const users = [];

routes.get("/", (_req, res) => {
  res.render("home", { users });
});

routes.post("/users", (req, res) => {
  users.push({ name: req.body.name });
  res.redirect("/");
});

module.exports = routes;
