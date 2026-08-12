import { ref } from "vue";
//Add to in todo list
const addTodos = () => {
  const title = ref(null);
  const completed = ref(null);
  const date = ref(null);
  const error = ref(null);
  const addTodo = async () => {
    const todos = {
      title: title.value,
      completed: completed.value,
      date: date.value,
    };
    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todos),
      });
      if (!response.ok) {
        throw new Error(`Failed to add record`);
      }
      const data = await response.json();
      console.log("Todo added", data);
    } catch (err) {
      error.value = err.message;
    }
  };
  return { title, completed, date, error, addTodo };
};

export default addTodos;
