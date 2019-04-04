// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routes from './router'

Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  components: { App },
  router,
  render: h=> h(App),
  template: '<App/>'
})
