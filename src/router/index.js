import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import UsuarioView from "../views/UsuarioView.vue";
import LivroView from "../views/LivroView.vue";
import AutorView from "../views/AutorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutorView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivroView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/usuario",
      name: "usuario",
      component: UsuarioView,
    },
    {
      path: "/logout",
      name: "logout",
      component: LogoutView,
    }
  ],
});

export default router;
