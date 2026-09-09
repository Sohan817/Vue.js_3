<template>
  <form @submit.prevent="addTask">
    <input v-model="newTask" placeholder="Add a new task" />
    <button type="submit">Add Task</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore.js";
export default {
  setup() {
    const newTask = ref("");

    const addTask = () => {
      if (newTask.value.length > 0) {
        const task = {
          id: Math.floor(Math.random() * 10000),
          title: newTask.value,
          isFavorite: false,
        };
        useTaskStore().addTask(task);
        newTask.value = "";
      }
    };

    return { newTask, addTask };
  },
};
</script>
