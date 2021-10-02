const Book = require("../models/book.model");

const bookControler = async (req, res) => {
  const books = await Book.find();

  return res.render("books", { books });
};

const createBook = async (req, res) => {
  const { nombre, autor } = req.body;

  const book = new Book({ nombre, autor });
  await book.save();

  bookControler(req, res);
};

const deleteBook = async (req, res) => {
  const { id } = req.body;

  await Book.findByIdAndDelete(id);

  bookControler(req, res);
};

module.exports = {
  bookControler,
  createBook,
  deleteBook
};
