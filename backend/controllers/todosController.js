const Todo = require("../models/Todos");

exports.getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

exports.createTodo = async (req, res) => {
  const newTodo = new Todo(req.body);
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
};

exports.getTodoById = async (req, res) => {
  const t = await Todo.findById({ _id: req.params.id });
  res.json(t);
};

exports.deleteTodoById = async (req, res) => {
  const tDelete = await Todo.findByIdAndDelete({ _id: req.params.id });
  res.json(tDelete);
};

exports.editTodoById = async (req, res) => {
  const tEdit = await Todo.findByIdAndUpdate({ _id: req.params.id });
  res.json(tEdit);
};
