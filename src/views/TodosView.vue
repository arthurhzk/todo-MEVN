<template>
  <div>
    <label for="">Name: </label>
    <input type="text" placeholder="Author" v-model="state.newAuthor" />
    <br />
    <label for="">Type your task: </label>
    <input type="text" placeholder="Task" v-model="state.newTodoItem" />

    <button @click="newTask()" value="Add Task">Add Task</button>

    <div v-for="item in state.todos" :key="item._id">
      <h4>Author: {{ item.author }}</h4>
      <h4>Task: {{ item.todos }}</h4>
      <router-link :to="`/todo/${item._id}`">
        <button @click="editTask(item._id)">Edit task</button>
      </router-link>
      <button @click="deleteTask(item._id)">Delete task</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import getTodos from "@/modules/getTodos";

const { state, getAllTodos, newTodo, deleteTodo, editTodo } = getTodos();

onMounted(getAllTodos);

const deleteTask = async (id) => {
  await deleteTodo(id);
  getAllTodos();
};

const newTask = async () => {
  await newTodo();
  getAllTodos();
};
const editTask = async (id) => {
  await editTodo(id);
  getAllTodos();
};
</script>
