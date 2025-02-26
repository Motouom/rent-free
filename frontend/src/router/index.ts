import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import RegistrationView from "@/views/RegistrationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: RegistrationView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    }
  ],
})

export default router
