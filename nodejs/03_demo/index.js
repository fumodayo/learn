const express = require("express");
const morgan = require("morgan"); // HTTP request logger middleware
const app = express();
const port = 3000;

app.use(morgan("combined"));

// route
app.get("/", (req, res) => res.send("Hello world"));

// 127.0.0.1 - localhost
app.listen(port, () => console.log(`listening at http://localhost:${port}`));
