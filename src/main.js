import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 /* 引入vue-Router */
import Router from "vue-router";
import routes from "./router";//引入路由数据
 
Vue.use(ElementUI);//使用elementUI
Vue.config.productionTip = false

Vue.use(Router)
const router = new Router({routes});//实例化路由对象

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
