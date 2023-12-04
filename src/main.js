import Vue from 'vue'
import App from './App.vue'
import { routes } from './router/routes'
import { store }  from './store/store' 
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({ routes })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
