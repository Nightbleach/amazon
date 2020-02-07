import Vue from 'vue'
import VueRouter from 'vue-router'
// 实线懒加载
const Home = () => import('../views/home/Home')
const News = () => import('../views/news/News')
const NewDetails = () => import('../views/newDetails/NewDetails')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/newsList',
    name: 'news',
    component: News
  },

  {
    path: '/newDetails/:id',
    name: 'newDetails',
    component: NewDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
