const { Schema, model } = require("mongoose");

const bookSchema = Schema({
  nombre: {
    type: String,
  },
  autor: {
    type: String,
  },
});

module.exports = model("Book", bookSchema);
