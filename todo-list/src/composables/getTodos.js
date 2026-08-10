import { ref } from "vue";

const getTodos = () => {
  const todos = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      todos.value = await response.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { todos, error, load };
};

export default getTodos;
