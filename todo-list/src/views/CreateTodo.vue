<template>
  <router-link :to="{ name: 'home' }">
    <h2>Todo List</h2>
  </router-link>

  <span v-if="error">{{ error }}</span>

  <form @submit.prevent="addTodo">
    <label> Title: </label>
    <input type="text" name="title" v-model="title" />
    <p v-if="titleError">{{ titleError }}</p>
    <label>Complete:</label>
    <select name="completed" v-model="completed">
      <option :value="true">True</option>
      <option :value="false">False</option>
    </select>
    <label>Date:</label>
    <input type="date" v-model="date" />
    <div class="submit"><button>Create a Todo</button></div>
  </form>
</template>

<script>
import { ref } from "vue";
import addTodos from "../composables/addTodos";
export default {
  setup() {
    let titleError = ref(null);
    //Add record in todo database
    const { title, completed, date, error, addTodo } = addTodos();
    //Handle Error
    const handleSubmit = () => {
      titleError.value =
        title.value.length <= 5 ? "Length should be at least 5 character" : "";
      return titleError.value;
    };
    return { title, completed, error, date, handleSubmit, titleError, addTodo };
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
button {
  border: 0;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 20px;
  background: #0b6dff;
  color: white;
}
.submit {
  text-align: center;
}
</style>
