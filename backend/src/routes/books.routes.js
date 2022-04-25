const express = require("express"),
  routes = express.Router(),
  book = require("../controllers/books.controllers"),
  upload = require("../config/multer.config");

routes.get("/", book.getAllData);
routes.get("/:id", book.getOneData);
routes.post("/", upload.single("image"), book.postData);
routes.put("/:id", upload.single("image"), book.putData);
routes.delete("/:id", book.deleteData);

module.exports = routes;
