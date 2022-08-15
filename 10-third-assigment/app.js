const homeRoutes = require("./routes/home");
const usersRoutes = require("./routes/users");
const rootDir = require("./util/path");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, "public")));
app.use(homeRoutes);
app.use(usersRoutes);
app.use("/", (_req, res) => {
  res.status(404).send("page not found 404?¿¿'¡'¿?¿¿");
});

app.listen(12345);
