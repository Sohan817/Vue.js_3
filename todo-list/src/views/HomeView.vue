<template>
  <h1>Todo List</h1>
  <router-link :to="{ name: 'CreateTodo' }">
    <button class="create-todo-button">Create Todo</button>
  </router-link>

  <div class="todos">
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-for="todo in todos" :key="todo.id">
        <tr v-if="todo.completed">
          <td>{{ todo.title }}</td>
          <td>{{ todo.date }}</td>
          <td><button>Edit</button></td>
          <td><button>Detele</button></td>
        </tr>
      </tbody>
    </table>
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

<style>
.todos {
  max-width: 720px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
table {
  border-collapse: collapse;
  border-spacing: 20px 0;
  width: 100%;
}
th,
td {
  padding: 8px 20px;
}
</style>
