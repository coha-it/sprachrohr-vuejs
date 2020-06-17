import Vue from 'vue'
import VueRouter from 'vue-router'

import Podcasts from '@/pages/podcasts'

function page (path) {
  return () => import(/* webpackChunkName: '' */ `@/pages/${path}`).then(m => m.default || m)
}

Vue.use(VueRouter)

  const routes = [

  // Frontend
  {
    path: '/',
    name: 'start',
    component: page('start.vue'),
    meta: {
      layout: 'basic'
    }
  },

  {
    path: '/podcasts',
    name: 'podcasts',
    component: Podcasts,
    meta: {
      layout: 'basic'
    }
  },

  // { path: '/', name: 'welcome', component: page('welcome.vue') },

  // { path: '/login', name: 'login', component: page('auth/login.vue') },
  // { path: '/register', name: 'register', component: page('auth/register.vue') },
  // { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  // { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  // { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  // { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  // { path: '/home', name: 'home', component: page('home.vue') },
  // { path: '/settings',
  //   component: page('settings/index.vue'),
  //   children: [
  //     { path: '', redirect: { name: 'settings.profile' } },
  //     { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
  //     { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
  //   ] },

  { path: '*', component: page('404.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
