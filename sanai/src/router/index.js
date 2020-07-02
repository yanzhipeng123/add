import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import shouy from '../views/shouy.vue'
import syy from '../components/syy.vue'
import yhlb from '../components/yhlb.vue'
import sjlb from '../components/sjlb.vue'
import sp from '../components/sp.vue'
import dd from '../components/dd.vue'
import gly from '../components/gly.vue'
Vue.use(VueRouter)
  const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/shouy',
    name: 'shouy',
    component: shouy,
    redirect:'/shouy/syy',
    children:[
      {
        path: 'syy',
        component: syy,
      },
      {
        path: 'yhlb',
        component: yhlb,
        meta:{
          tilte:'商品',
          lb:'商品列表'
        }
      },
      {
        path: 'sjlb',
        component: sjlb,
        meta:{
          tilte:'商品',
          lb:'添加商品'

        }
      },
      {
        path: 'sp',
        component: sp,
        meta:{
          tilte:'商品',
          lb:'商品分类'
        }
      },
      {
        path: 'dd',
        component: dd,
        meta:{
          tilte:'商品',
          lb:'商品类型'
        }
      },
      {
        path: 'gly',
        component: gly,
        meta:{
          tilte:'商品',
          lb:'品牌管理'
        }
      },
      
]
  }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
