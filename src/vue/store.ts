import {Vue} from 'av-ts'
var Vuex = require('vuex');
// var store = new Vuex.Store({
//   state: {
//     counter: 1
//   },
//   mutations: {
//     INCREMENT (state) {
//       // mutate state
//       state.count++
//     }
//   },
//   strict: true
// })
//Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    msg: "test"
  },
  mutations: {
    double (state) {
      state.msg=state.msg+state.msg
    }
  }
})

export default store
