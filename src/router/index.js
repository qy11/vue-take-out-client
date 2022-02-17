/*
*
*/
import Vue from 'vue'
import Router from 'vue-router'

// import Msite from '../pages/Msite/Msite.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'
// import Search from '../pages/Search/Search.vue'
// import Login from '../pages/Login/Login.vue'

const Msite = () => import('../pages/Msite/Msite.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Search = () => import('../pages/Search/Search.vue')
const Login = () => import('../pages/Login/Login.vue')
// 声明使用插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: () => import('../pages/Shop/Shop.vue'),
      children: [
        {
          path: '/shop/goods',
          component: () => import('../pages/Shop/ShopGoods/ShopGoods.vue')
        },
        {
          path: '/shop/ratings',
          component: () => import('../pages/Shop/ShopRatings/ShopRatings.vue')
        },
        {
          path: '/shop/info',
          component: () => import('../pages/Shop/ShopInfo/ShopInfo.vue')
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    // return 期望滚动到哪个的位置
  }
})
