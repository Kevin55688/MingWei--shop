import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from "../components/about/about.vue"
import HomeCom from "../components/HomeCom.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children : [
        {
          path: "/home",
          component : HomeCom,
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About,
    // },
  ]
})

export default router
