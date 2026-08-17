<template>
  <div class="wrapper">
    <h1>Todo List</h1>
    <dev class="input-row">
      <input type="text" placeholder="Add a task" v-model="newTask" />
      <button @click="addTask">Add</button>
    </dev>
    <ul class="task-list" v-for="task in tasks" :key="task.id">
      <li :class="{ done: task.completed }">
        <button @click="removeTodo(task.id)" class="remove-item">X</button>
        <input type="checkbox" v-model="task.completed" />
        <span>{{ task.todo }}</span>
      </li>
    </ul>
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

function removeTodo(id) {
  tasks.value = tasks.value.filter((t) => {
    return t.id != id;
  });
}
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
.input-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
input {
  flex-grow: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
}
.task-list li.done span {
  text-decoration: line-through;
}
.remove-item {
  background: #e53e3e;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
}
.remove-item:hover {
  background: #e53e3e;
}
</style>
