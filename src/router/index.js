import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '../layouts/MainLayout.vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [

    { path: '/app/', component: MainLayout, redirect: '/home', children:
      [
        { path: 'home', name: "Home", component: Home },
        { path: 'about', name: "About", component: About },
      ],
  },
  {
      path: '/',
      redirect: '/app'
   },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
