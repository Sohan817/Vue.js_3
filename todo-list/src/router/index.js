import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateTodo from "../views/CreateTodo.vue";
import EditTodo from "../views/EditTodo.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create-todo",
    name: "CreateTodo",
    component: CreateTodo,
  },
  {
    path: "/edit-todo/:id",
    name: "EditTodo",
    component: EditTodo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
