import Vue from 'vue'
import VueRouter from 'vue-router'
// 实线懒加载
const Home = () => import('../views/home/Home')
const News = () => import('../views/news/News')
const NewDetails = () => import('../views/newDetails/NewDetails')
const ImgNews = () => import('../views/imgNews/ImgNews')
const ImgDetails = () => import('../views/imgNews/imgNewsComponents/ImgDetails')
const Product = () => import('../views/product/Product')
const ProductDetails = () => import('../views/product/productComponents/ProductDetails')
const ProductDesc = () => import('../views/product/productComponents/ProductDesc')
const Cart = () => import('../views/cart/Cart')

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
  },
  {
    path: '/imgNews',
    name: 'imgNews',
    component: ImgNews
  },
  {
    path: '/imgNews/:id',
    name: 'imgDetails',
    component: ImgDetails
  },
  {
    path: '/products',
    name: 'products',
    component: Product
  },
  {
    path: '/products/:id',
    name: 'productDetails',
    component: ProductDetails
  },
  {
    path: '/home/productDesc/:id',
    name: 'productDesc',
    component: ProductDesc
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
