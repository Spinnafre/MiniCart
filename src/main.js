import Vue from 'vue'
import App from './components/App.vue'

import store from './store/index'
import router from './Router'

import './plugins/bootstrap'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
