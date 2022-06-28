// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})




const app = createApp(App)

// 配置请求的根路径
// axios.defaults.baseURL = 'https://www.escook.cn'

// 将 axios 挂载为 app 的全局自定义属性（ 如 $http ）
app.config.globalProperties.$http = axios
