import { createRouter, createWebHistory } from 'vue-router'

import AuthAPI from '../api/Auth';
import Url from '../api/Url'

import MainLayout from '../layouts/MainLayout.vue'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import SignUp from '../pages/SignUp.vue'
import About from '../pages/About.vue'
import ListUrl from '../pages/Url/ListUrl.vue'
import NotFound from '../pages/NotFound.vue'
import CreateUrlPublic from '../pages/CreateUrlPublic.vue'

const routes = [

    { path: '/app/', component: MainLayout, redirect: '/home', children:
      [
        { path: 'home', name: "AppHome", component: Home },
        { path: 'about', name: "About", component: About },
        { path: 'list-url', name: "ListUrl", component: ListUrl },
      ],
      // GARANTE A AUTENTICAÇÃO
      // meta: {
      //   requiresAuth: true
      // },
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


// em 'to' fullPath: "/login"

async function searchShortUrl(short_url) {
  let short = await Url.getShorUrl(short_url)
  console.log('saida de short', short)
  if(short.data.actual_url){
    return short.data.actual_url
  } else {
    return '/not-found'
  }

}

// REgistrar todas as rotas aqui
let all_routes = [
  '/sign-up', '/login', '/', '/app/', '/not-found'
]

// Regula aonde vai executar algo antes de entrar
router.beforeEach( async (to, from, next) => {

  // console.log('to', to)
  // console.log('from', from)
  // console.log('next', next)

  // autenticaçâo do App
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') === null){
      next({ name: 'Login', params: { auth: 'false' }});
    } else {
      AuthAPI.auth(localStorage.getItem('token')).then( () => {
        next()
      })
      .catch( () => {
        if(to.name == 'Login'){
          next(false) // abort
        } else {
          next({ name: 'Login', params: { auth: 'false' }});
        }
      })
    }
  }

  if(!to.fullPath.startsWith('/app') && !(all_routes.includes(to.fullPath)) ){
    // console.log('to.fullPath in all_routes', to.fullPath in all_routes, '-----', to.fullPath)
    // console.log(to.fullPath.startsWith('/app') , to.fullPath in all_routes, to.fullPath, to.fullPath in ['/login'])
    // Active Url SHornetr
    let s = await searchShortUrl(to.fullPath)
    console.log('saida final', s)
    if(s != '/not-found'){
      console.log('entrou no link', s)
      window.location.href = s
      // http://localhost:8080/UEypB
      // router.go(s)
    }else{
      console.log('entrou no not-found')
      // next('/not-found')
    }
  }

  next()


})

export default router
