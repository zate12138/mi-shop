import Vue from 'vue'
import App from './App.vue'

import { router } from './router/index.js';
import { store } from "./store/index.js"

Vue.config.productionTip = false

import "./directive/index.js"
import "./components/index.js"


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
