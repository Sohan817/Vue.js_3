import { defineStore } from "pinia";
export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [
      { id: 1, title: "Task 1", isFavorite: false },
      { id: 2, title: "Task 2", isFavorite: true },
      { id: 3, title: "Task 3", isFavorite: false },
    ],
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
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
    },
    toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFavorite = !task.isFavorite;
    },
  },
});
export default useTaskStore;
