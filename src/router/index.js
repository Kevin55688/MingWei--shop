import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from "../components/about/about.vue"
import HomeCom from "../components/HomeCom.vue"
import NewProducts from "../components/newproducts/NewProducts.vue"
import ContactUs from "../components/contactus/ContactUs.vue"
import ProductsWindow from "../components/newproducts/ProductsWindow.vue"
import LunchBox from "../components/newproducts/pds/LunchBox.vue"
import PaperBowl from "../components/newproducts/pds/PaperBowl.vue"
import MealCup from "../components/newproducts/pds/MealCup.vue"
import PlasticSpoon from "../components/newproducts/pds/PlasticSpoon.vue"
import PlasticChopstick from "../components/newproducts/pds/PlasticChopstick.vue"
import WoodenFork from "../components/newproducts/pds/WoodenFork.vue"
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
            },
            {
              path: "/allproducts/paperbowl",
              component : PaperBowl,
            },
            {
              path: "/allproducts/mealcup",
              component : MealCup,
            },
            {
              path: "/allproducts/plasticspoon",
              component : PlasticSpoon,
            },
            {
              path: "/allproducts/plasticchopstick",
              component : PlasticChopstick,
            },
            {
              path: "/allproducts/woodenfork",
              component : WoodenFork,
            },
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
