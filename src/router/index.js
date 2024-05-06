import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import TodoListById from "../views/[id].vue";
import LogIn from "../views/login.vue";
import SignUp from "../views/signup.vue";
import store from "../store/store";

const routes = [
  { path: "/", component: Home, meta: { auth: true } },
  { path: "/todo-list/:id", component: TodoListById, meta: { auth: true } },
  { path: "/auth/login", component: LogIn, meta: { auth: false } },
  { path: "/auth/signup", component: SignUp, meta: { auth: false } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters["auth/GET_USER_TOKEN_GETTER"]) {
    next("/auth/login");
  } else if (!to.meta.auth && store.getters["auth/GET_USER_TOKEN_GETTER"]) {
    next("/");
  } else {
    next();
  }
});

export default router;
