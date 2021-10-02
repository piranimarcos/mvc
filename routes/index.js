const { Router } = require("express");
const {
  bookControler,
  createBook,
  deleteBook,
} = require("../controllers/book.controller");

const routes = Router();

routes.get("/", bookControler);

routes.post("/", createBook);

routes.post("/delete", deleteBook);

module.exports = routes;
