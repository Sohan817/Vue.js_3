import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import Jobs from "@/views/jobs/Jobs.vue";
import JobsDetail from "@/views/jobs/JobsDetail.vue";
import NotFound from "../views/NotFount.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "jobsdetail",
    component: JobsDetail,
    props: true,
  },
  //Redirect
  {
    path: "/all-jobs",
    redirect: "/jobs",
  },
  //Catch all 404 Not Found
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
