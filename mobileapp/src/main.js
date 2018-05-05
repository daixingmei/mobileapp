import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import axios from 'axios'
import store from './store/'
import Loading from './components/loading/'

import { Toast } from 'vux'
import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.use(Loading)

const router = new VueRouter({
  routes,
  // linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
})
//axios的一些配置，比如发送请求显示loading，请求回来loading消失之类的
axios.interceptors.request.use(function(config) { //配置发送请求的信息
  store.dispatch('loadingShow')
  return config;
}, function(error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function(response) { //配置请求回来的信息
  store.dispatch('loadingHide')
  return response;
}, function(error) {

  return Promise.reject(error);
});

import './assets/css/base.css'
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
