import { defineStore } from "pinia";

export const useTaskStore = defineStore("task", () => {
  const tasks = ref([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
  ]);
  return { tasks };
});
