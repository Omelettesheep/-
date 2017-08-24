import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Main = r => require.ensure([], () => r(require('../pages/main.vue')), 'main')

const Login = r => require.ensure([], () => r(require('../pages/login/login.vue')), 'login')
const Downloads = r => require.ensure([], () => r(require('../pages/downloads/downloads.vue')), 'downloads')


const routes = [{
  path:'/',
  redirect:'/main'
},{
  path:'/main',
  component:Main,
  children:[{
    path:'/',
    redirect:'login',
  },{
    path:'login',
    component:Login
  },{
    path:'downloads',
    component:Downloads
  }]
}]

export default new Router({
   routes:routes,
   base:__dirname
})
