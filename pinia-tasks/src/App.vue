<template>
  <main>
    <!-- Main content goes here -->
    <header>
      <img src="@/assets/pinia-logo.svg" alt="Pinia Logo" />
      <h1>Pinia Tasks</h1>
      <nav class="filter">
        <button @click="filteredTask = 'all'">All</button>
        <button @click="filteredTask = 'favorites'">Favorites</button>
      </nav>
    </header>
    <!-- Task List -->

    <div class="task-list" v-if="filteredTask === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>

    <div class="task-list" v-if="filteredTask === 'favorites'">
      <p>You have {{ taskStore.favCount }} favorite tasks</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetail :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import TaskDetail from "./components/TaskDetail.vue";
import { useTaskStore } from "./stores/TaskStore.js";
import { ref } from "vue";

export default {
  components: {
    TaskDetail,
  },
  setup() {
    const taskStore = useTaskStore();
    const filteredTask = ref("all");
    return { taskStore, filteredTask };
  },
};
</script>
