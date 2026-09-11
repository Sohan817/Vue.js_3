<template>
  <main>
    <!-- Main content goes here -->
    <header>
      <img src="@/assets/pinia-logo.svg" alt="Pinia Logo" />
      <h1>Pinia Tasks</h1>
      <nav class="filter">
        <button @click="filteredTask = 'all'">All</button>
        <button @click="filteredTask = 'favorites'">Favorites</button>
        <button @click="taskStore.$reset()">Reset</button>
      </nav>
    </header>
    <!-- Add Task Form -->
    <AddTask />

    <!-- Loading Indicator -->
    <div class="loading" v-if="taskStore.loading">Loading tasks...</div>

    <!-- Task List -->
    <div class="task-list" v-if="filteredTask === 'all'">
      <p>You have {{ totalCount }} tasks</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filteredTask === 'favorites'">
      <p>You have {{ favCount }} favorite tasks</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import { storeToRefs } from "pinia";
import AddTask from "./components/AddTask.vue";
import TaskDetail from "./components/TaskDetail.vue";
import { useTaskStore } from "./stores/TaskStore.js";
import { ref } from "vue";

export default {
  components: {
    TaskDetail,
    AddTask,
  },
  setup() {
    const taskStore = useTaskStore();
    const filteredTask = ref("all");
    const { tasks, favs, totalCount, favCount, loading } =
      storeToRefs(taskStore);

    taskStore.getTask();
    return {
      taskStore,
      filteredTask,
      tasks,
      favs,
      totalCount,
      favCount,
      loading,
    };
  },
};
</script>
