import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Products from "../views/Products.vue";
import NotFound from "../views/NotFound.vue";
import AdminView from "../views/AdminView.vue";
import loginView from "../views/loginView.vue";

let isLogin = false;
function checkLogin() {
  isLogin = true;
}
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About, props: { name: "Shop Router" } },
    {
      path: "/products/:id",
      name: "ProductDetails",
      component: Products,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    { path: "/login", name: "Login", component: loginView },
    {
      path: "/admin",
      name: "Admin",
      component: AdminView,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth === true && !isLogin) {
    alert("You need to authenticate");
    next({ name: "Login" });
  } else {
    next();
  }
});
export { checkLogin };
export default router;
