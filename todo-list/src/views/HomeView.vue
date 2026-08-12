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
          <th>Completed</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody v-for="todo in todos" :key="todo.id">
        <tr>
          <td>{{ todo.title }}</td>
          <td>{{ todo.date }}</td>
          <td>{{ todo.completed }}</td>
          <router-link :to="{ name: 'EditTodo', params: { id: todo.id } }">
            <td><button>Edit</button></td>
          </router-link>
          <td>
            <button @click="openDeleteModal(todo.id)">Detele</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Delete
    v-if="showDeleteModal"
    :todiId="selectTodoId"
    @close="showDeleteModal = false"
  />
</template>

<script>
import Delete from "../components/Delete.vue";
import getTodos from "../composables/getTodos.js";
import { ref } from "vue";
export default {
  name: "HomeView",
  components: { Delete },
  setup() {
    const { todos, error, load } = getTodos();
    load();

    let showDeleteModal = ref(false);
    let selectTodoId = ref(null);
    const openDeleteModal = (id) => {
      selectTodoId.value = id;
      showDeleteModal.value = true;
    };

    return { todos, error, openDeleteModal, showDeleteModal, selectTodoId };
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
