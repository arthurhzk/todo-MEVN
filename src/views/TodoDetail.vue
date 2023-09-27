<template>
  <div v-for="item in state.todos" :key="item._id">
    <h4>Author: {{ item.author }}</h4>
    <h4>Task: {{ item.todos }}</h4>
    <button @click="deleteTask(item._id)">Delete task</button>
    <button @click="editTask(item._id)">Edit task</button>
  </div>
</template>
