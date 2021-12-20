import { createRouter, createWebHistory } from 'vue-router'

import AuthAPI from '../api/Auth';
import Url from '../api/Url'

import MainLayout from '../layouts/MainLayout.vue'

import Login from '../pages/Login.vue'
import SignUp from '../pages/SignUp.vue'
import NotFound from '../pages/NotFound.vue'
import TopUrlsPublic from '../pages/TopUrlsPublic.vue'
import CreateUrlPublic from '../pages/CreateUrlPublic.vue'

import Home from '../pages/App/Home.vue'
import ListUrl from '../pages/App/ListUrl.vue'
import CreateUrl from '../pages/App/CreateUrl.vue'
import AppTopUrls from '../pages/App/TopUrls.vue'

const routes = [

  {
    path: '/app/',
    component: MainLayout,
    redirect: '/home',
    children: [
      { path: 'home', name: "AppHome", component: Home },
      { path: 'list-url', name: "ListUrl", component: ListUrl },
      { path: 'create-url', name: "CreateUrl", component: CreateUrl },
      { path: 'top-urls', name: "AppTopUrls", component: AppTopUrls },
    ],
    // Grant Authentication
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/',
    name: "CreateUrlPublic",
    component: CreateUrlPublic

  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/top-urls',
    name: 'TopUrlsPublic',
    component: TopUrlsPublic

  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


async function searchShortUrl(short_url) {
  try {
    let short = await Url.getShorUrl(short_url)
    if (short.data.actual_url) {
      return short.data.actual_url
    } else {
      return '/not-found'
    }
  } catch (error) {
    return '/not-found'
  }
}

// Register App urls
let all_routes = [
  '/sign-up', '/login', '/', '/app/', '/not-found', '/top-urls'
]

router.beforeEach(async (to, from, next) => {

  // Auth User
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') === null) {
      next({ name: 'Login', params: { auth: 'false' } });
    } else {
      AuthAPI.auth(localStorage.getItem('token')).then(() => {
          next()
        })
        .catch(() => {
          if (to.name == 'Login') {
            next(false) // abort, pois eh o proprio login- -> login
          } else {
            next({ name: 'Login', params: { auth: 'false' } });
          }
        })
    }
  }

  // URL Shortener (if ins unkown url)
  if (!to.fullPath.startsWith('/app') && !(all_routes.includes(to.fullPath))) {
    let s = await searchShortUrl(to.fullPath)
    if (s != '/not-found') {
      window.location.href = s
    } else {
      next({ name: 'NotFound' });
      console.log('entrou no not-found')
    }
  }

  // Continue
  next()

})

export default router
