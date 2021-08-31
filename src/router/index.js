import { createRouter, createWebHistory } from 'vue-router'
import TheIntro from '../pages/TheIntro.vue'

const routes = [
  {
    path: '/',
    // name: 'Intro', // not needed because of what?
    component: TheIntro
  }, {
    path: '/rendering',
    component: () => import('@/pages/TheRendering.vue') // lazy loaded module
  },
  {
    path: '/component',
    component: () => import('@/pages/TheComponent.vue')
  },
  {
    path: '/hooks',
    component: () => import('@/pages/LifecycleHooks.vue')
  },
  {
    path: '/slots',
    component: () => import('@/pages/TheSlots.vue')
  },
  {
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
