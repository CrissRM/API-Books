const express = require("express"),
  morgan = require("morgan"),
  cors = require("cors"),
  { App } = require("./config"),
  routes = require("./routes/books.routes");
app = express();

app.set("port", App.port);
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api-books/", routes);

module.exports = app;
