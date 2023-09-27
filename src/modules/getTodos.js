import { ref } from "vue";
import axios from "axios";

const getTodos = () => {
  const state = ref({
    newAuthor: "",
    newTodoItem: "",
    todos: [],
  });

  const getAllTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/todos");
      state.value.todos = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const newTodo = async () => {
    try {
      const response = await axios.post("http://localhost:3000/todos/new", {
        author: state.value.newAuthor,
        todos: state.value.newTodoItem,
      });
      state.value.todos = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/todos/delete/${id}`
      );
      state.value.todos = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/todos/edit/${id}`
      );
      state.value.todos = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { state, getAllTodos, newTodo, deleteTodo, editTodo };
};

export default getTodos;
