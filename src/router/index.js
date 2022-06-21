import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Admin from '@/views/Admin'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: "/dist/",
  mode: 'hash',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: "首页"
      }
    },
    {
      path: '/owner/admin.html',
      name: 'Admin',
      component: Admin,
      meta: {
        title: "后台管理系统"
      }
    }
  ]
})
