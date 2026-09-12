import { createRouter, creareWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
const routers = createRouter({
  history: creareWebHistory(),
  routers: [
    { path: "/", component: Home },
    { path: "/about", component: About },
  ],
});
export default routers;
