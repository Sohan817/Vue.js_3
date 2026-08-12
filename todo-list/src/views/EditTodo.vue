<template>
  <router-link :to="{ name: 'home' }">
    <h2>Todo List</h2>
  </router-link>
  <form @submit.prevent="handleSubmit(todo.id)">
    <label> Title: </label>
    <input type="text" name="title" v-model="todo.title" />
    <p v-if="titleError">{{ titleError }}</p>
    <label>Complete:</label>
    <select name="completed" v-model="todo.completed">
      <option value="Yes">Yes</option>
      <option value="No">No</option>
    </select>
    <label>Date:</label>
    <input type="date" v-model="todo.date" />
    <div class="submit"><button>Update Todo</button></div>
  </form>
</template>

<script>
import { ref } from "vue";
import editTodo from "../composables/editTodo.js";
export default {
  props: ["id"],
  setup(props) {
    const titleError = ref(null);

    const { loadSingleTodo, todo, error, updateTodo } = editTodo(props.id);
    loadSingleTodo(props.id);

    const handleSubmit = (id) => {
      if (todo.value.title.length <= 5) {
        titleError.value = "Length should be at least 5 character";
        return;
      }
      titleError.value = "";
      updateTodo(id);
    };
    return { todo, error, handleSubmit, titleError };
  },
};
</script>

<style></style>
