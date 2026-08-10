<template>
  <div class="home">
    <h1>Todo List</h1>
    <div class="todos" v-for="todo in todos" :key="todo">
      <h3>{{ todo.title }}</h3>
    </div>
    <div class="createTodo">
      <button>Create Todo</button>
    </div>
  </div>
</template>

<script>
import getTodos from "../composables/getTodos.js";
export default {
  name: "HomeView",
  setup() {
    const { todos, error, load } = getTodos();
    load();
    return { todos, error };
  },
};
</script>
