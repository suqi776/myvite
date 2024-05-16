import { createWebHistory, createRouter } from 'vue-router'


const routes = [
  { 
    path: '/', 
    component: () => import('~/pages/home.vue')
  },
  {
    path: '/hi',
    component: () => import('~/pages/Hi/hi.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})