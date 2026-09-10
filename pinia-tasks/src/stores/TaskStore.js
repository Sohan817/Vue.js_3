import { defineStore } from "pinia";
export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [],
    loading: false,
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFavorite);
    },
    favCount() {
      return this.tasks.reduce((p, c) => {
        return c.isFavorite ? p + 1 : p;
      }, 0);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
  actions: {
    async getTask() {
      this.loading = true;
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      this.tasks = data;
      this.loading = false;
    },
    async addTask(task) {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      const data = await response.json();
      this.tasks.push(data);
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFavorite = !task.isFavorite;
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isFavorite: task.isFavorite }),
      });
      const data = await response.json();
    },
  },
});
export default useTaskStore;
