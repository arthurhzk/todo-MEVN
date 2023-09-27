const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todosController");

router.get("/", todosController.getAllTodos);

router.post("/new", todosController.createTodo);

router.get("/get/:id", todosController.getTodoById);

router.delete("/delete/:id", todosController.deleteTodoById);

router.put("/edit/:id", todosController.editTodoById);
module.exports = router;
