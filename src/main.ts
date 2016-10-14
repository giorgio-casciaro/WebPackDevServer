import * as Vue from 'vue'
//import * as App from './App.vue'
var store=require('./vuex/store').default
var router=require('./router').default
var App=require('./components/App')


new Vue({
  router:router,
  store:store, // inject store to all children
  el: '#approot',
  render: h => h(App),
  components: { App }
})
