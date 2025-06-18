import { createRouter, createWebHistory } from 'vue-router'

import LayoutDefault from '@/layouts/LayoutDefault.vue'
import LayoutLogin from '@/layouts/LayoutLogin.vue'

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LoginView from '@/views/Login.vue'
import Prixodcreate from '@/views/Prixodcreate.vue'

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'about',
        name: 'about',
        component: AboutView,
      },
      {
        path: '/prixodcreate',
        name: 'prixod',
        component: Prixodcreate,
      },
    ],
  },
  {
    path: '/login',
    component: LayoutLogin,
    children: [
      {
        path: '',
        name: 'login',
        component: LoginView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
