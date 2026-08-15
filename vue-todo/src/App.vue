<template>
  <div class="wrapper">
    <h1>Todo List</h1>
    <dev class="input-row">
      <input type="text" placeholder="Add a task" v-model="newTask" />
      <button @click="addTask">Add</button>
    </dev>
  </div>
</template>

<script setup>
import { ref } from "vue";
const newTask = ref(null);
const tasks = ref([]);

const addTask = () => {
  const task = newTask.value.trim();
  if (!task) {
    return;
  }
  tasks.value.push({
    id: Date.now(),
    todo: task,
    completed: false,
    favourite: false,
  });
  newTask.value = "";
  console.log(tasks);
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.wrapper {
  max-width: 500px;
  margin: 2rem auto;
  font-family: sans-serif;
  text-align: center;
}
</style>
