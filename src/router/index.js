import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from "../components/about/about.vue"
import HomeCom from "../components/HomeCom.vue"
import NewProducts from "../components/newproducts/NewProducts.vue"
import ContactUs from "../components/contactus/ContactUs.vue"
import ProductsWindow from "../components/newproducts/ProductsWindow.vue"
import LunchBox from "../components/newproducts/pds/LunchBox.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children : [
        {
          path: "/about",
          component : About,
        },
        {
          path: "/newproducts",
          component : NewProducts,
          children : [
            {
              path: "/allproducts",
              component : ProductsWindow,
            },
            {
              path: "/allproducts/lunchbox",
              component : LunchBox,
            }
        ]
        },
        {
          path: "/contactus",
          component : ContactUs,
        },
      ]
    },
  ]
})

export default router
