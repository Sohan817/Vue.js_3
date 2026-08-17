<template>
  <div class="wrapper">
    <h1>Todo List</h1>
    <dev class="input-row">
      <input type="text" placeholder="Search here..." v-model="search" />
      <input type="text" placeholder="Add a task" v-model="newTask" />
      <button @click="addTask">Add</button>
    </dev>
    <div class="filters">
      <button
        @click="activeFilter = f"
        v-for="f in filters"
        :key="f"
        :class="{ active: activeFilter === f }"
      >
        {{ f }}
      </button>
    </div>
    <ul class="task-list">
      <li
        :class="{ done: task.completed }"
        v-for="task in filteredTasks"
        :key="task.id"
      >
        <button @click="removeTodo(task)" class="remove-item">X</button>
        <button @click="toggleFav(task)" class="fav">
          {{ task.favourite ? "★" : "☆" }}
        </button>
        <input type="checkbox" v-model="task.completed" />
        <span @click="toggleTodal(task.id)">{{ task.todo }}</span>
      </li>
    </ul>
  </div>
  <EditModal
    v-if="showModal"
    :editAbleId="editId"
    :tasks="tasks"
    @close="showModal = false"
    @updated-task="tasks = $event"
  />
</template>

<script setup>
import { ref, computed } from "vue";
import EditModal from "./components/EditModal.vue";

const newTask = ref(null);
const tasks = ref([]);
const showModal = ref(false);
let editId = ref(null);
const search = ref("");
const activeFilter = ref("All");
const filters = ["All", "Completed", "Uncompleted", "Favorite"];

function toggleTodal(id) {
  showModal.value = true;
  editId.value = id;
}

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
  console.log(tasks);
  newTask.value = "";
};

function removeTodo(id) {
  tasks.value = tasks.value.filter((t) => {
    return t.id != id;
  });
}
function toggleFav(task) {
  task.favourite = !task.favourite;
}

const filteredTasks = computed(() => {
  return tasks.value.filter((task) => {
    // Search condition
    const matchesSearch = task.todo
      .toLowerCase()
      .includes(search.value.toLowerCase());

    if (!matchesSearch) {
      return false;
    }

    // Filter condition
    if (activeFilter.value === "Completed") {
      return task.completed;
    }

    if (activeFilter.value === "Uncompleted") {
      return !task.completed;
    }

    if (activeFilter.value === "Favorite") {
      return task.favourite;
    }

    // "All"
    return true;
  });
});
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
.fav {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #f6c90e;
}
.fav:hover {
  transform: scale(1.2);
}
.filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.filters button {
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
}
.filters button.active {
  background: #333;
  border-color: #333;
  color: #fff;
}
</style>
