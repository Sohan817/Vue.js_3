import { ref } from "vue";

const editTodo = (id) => {
  const todo = ref([]);
  const error = ref(null);
  //load todo
  const loadSingleTodo = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/todos/${id}`);
      if (!res.ok) {
        throw new Error("No data found");
      }
      todo.value = await res.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  //Update todo
  const updateTodo = async (id) => {
    const UpdatedTodo = {
      title: todo.value.title,
      completed: todo.value.completed,
      date: todo.value.date,
    };
    try {
      const res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UpdatedTodo),
      });
      if (!res.ok) {
        throw new Error(`Failed to edit record`);
      }
      const data = await res.json();
      console.log("Todo updated", data);
    } catch (err) {
      error.value = err.message;
    }
  };
  return { todo, error, loadSingleTodo, updateTodo };
};

export default editTodo;
