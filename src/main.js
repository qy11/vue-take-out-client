// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'

import './mock/mockServer' // 加载mockServer即可
import { Button } from 'mint-ui'
import loading from './common/imgs/loading.gif'
import './filters' // 加载过滤器
Vue.use(VueLazyload)
// 注册为全局组件标签
Vue.component(Button.name, Button)

Vue.config.productionTip = false
Vue.use(VueLazyload, { // 内部自定义一个指令 v-lay
  loading
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
