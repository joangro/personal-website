import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: Home },
    { path: "/contact", name: "contact", component: Home },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    return { top: 0 };
  },
});

export default router;
