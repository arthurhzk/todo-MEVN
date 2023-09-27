const mongoose = require("mongoose");

const TodosSchema = new mongoose.Schema({
  todos: String,
  author: String,
});

module.exports = mongoose.model("todo", TodosSchema);
