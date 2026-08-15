<template>
  <div class="wrapper">
    <h1>Todo List</h1>
    <dev class="input-row">
      <input type="text" placeholder="Add a task" v-model="newTask" />
      <p>{{ newTask }}</p>
      <button>Add</button>
    </dev>
  </div>
</template>

<script setup>
import { ref } from "vue";
const newTask = ref(null);
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
