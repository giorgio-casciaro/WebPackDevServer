<script>

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

  const store = new Vuex.Store({
    state: {
      counter: 0
    },
    mutations: {
      INCREMENT (state) {
        state.counter++
      }
    },
    actions: {
      INCREMENT (context) {
        context.commit('INCREMENT')
      }
    }
  }
)

  export default store

</script>
