const path = require("path");
const express = require("express");
const morgan = require("morgan"); // HTTP request logger middleware
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template Engine
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// route
app.get("/", (req, res) => res.render("home"));

app.get("/news", (req, res) => res.render("news"));

// 127.0.0.1 - localhost
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
