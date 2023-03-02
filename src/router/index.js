import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 跳转重复路由报错处理
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

// 全局路由
const globalRoutes = [
  { path: '/404', component: () => import("../views/common/404"), name: '404', meta: { title: '404未找到' } },
  { path: '/login', component: () => import("../views/common/login"), name: 'login', meta: { title: '登录' } }
]

// 主入口路由
const mainRoutes = {
  path: '/',
  component: () => import('@/views/main'),
  name: 'main',
  redirect: { name: 'home' },
  meta: { title: '主入口整体布局' },
  children: [
    { path: '/home', component: () => import('@/views/common/home'), name: 'home', meta: { title: '首页' } },
    { path: '/series', component: () => import("../views/goods/listOfSeries"), name: 'series', meta: { title: '系列' } }, //商品系列列表
    { path: '/goodsDetails', component: () => import("../views/goods/details"), name: 'goodsDetails', meta: { title: '产品详情' } }, //产品详情
    { path: '/service', component: () => import("../views/help/service"), name: 'service', meta: { title: '专属服务' } }, //专属服务
    { path: '/us', component: () => import("../views/help/aboutUs"), name: 'aboutUs', meta: { title: '关于我们' } }, //关于我们
    { path: '/help', component: () => import("../views/help/index"), name: 'aboutUs', meta: { title: '帮助中心' } }, //关于我们
    { path: '/concat', component: () => import("../views/help/concat"), name: 'concat', meta: { title: '联系客服' } }, //联系客服
    { path: '/cart', component: () => import("../views/goods/shopCart"), name: 'cart', meta: { title: '购物袋' } }, //购物袋
  ],
  beforeEnter (to, from, next) {
    next()
  }
}

const router = new VueRouter({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: globalRoutes.concat(mainRoutes)
})

export default router
