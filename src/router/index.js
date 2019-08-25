import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Regist from '@/components/login/Regist'
import EditUser from '@/components/login/EditUser'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'regist',
      component: Regist
    },
    {
      path: '/edit',
      name: 'EditUser',
      component: EditUser
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ],
  mode: 'history'
})
