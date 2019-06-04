import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
Vue.use(Router)

const page = name =>() => import('@/views/pc/'+name)

const routes = [
  {path: '/login', name: 'login', component: page('login')},
  {path: '/register', name: 'register', component: page('register')},
  {
    path: '/',
    name: 'menu',
    component: page('menu'),
    children:[
      {path: '/home', name: 'home', component: page('home'),meta: []},
      {path: '/addContent', name: 'createContent', component: page('content'),meta: ['文章管理', '发布文章']}
    ]

  }

]
const router = new Router({
  routes
})
if (store.state.isLogin) {  // 通过vuex 如果当前有登录
  console.log("我登录")
} else {
  console.log("我不登录")

}

    export default router
