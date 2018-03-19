import Vue from 'vue'
import App from './App.vue'
import vueCityAmies from './lib/index.js'
Vue.use(vueCityAmies)

new Vue({
  el: '#app',
  render: h => h(App)
})
