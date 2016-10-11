//import {Vue} from 'av-ts'
import App from './vue/app.vue'
import store from './vue/store'
//var Vuex = require('vuex');
var Vue = require('vue');
//Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
