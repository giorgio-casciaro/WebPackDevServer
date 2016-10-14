import * as Vue from 'vue'
import * as Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  msg:"EMPTYMESSAGE"
}

const mutations = {
  TEST_EVENT (state) {
    state.msg+="state.msg"
  }
}


export default new Vuex.Store({
  state,
  mutations
})
