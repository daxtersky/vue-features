import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../pages/TheHome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TheHome
  }, {
    path: '/basics',
    name: 'Basics',
    component: () => import('../pages/TheBasics.vue') // lazy loaded module
  }, {
    path: '/glossary',
    name: 'Glossary',
    component: () => import('../pages/TheGlossary.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // TODO explain the difference between default one and history
  routes
})

export default router
