import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from "vant"


import "./assets/scss/index.scss"
import "vant/lib/index.css"


import http from "./utils/request"
import i18n from "./locales/i18n"


Vue.use(Vant)

Vue.prototype.$http = http




Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
