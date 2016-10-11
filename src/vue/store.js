"use strict";
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
var store = new Vuex.Store({
    state: {
        msg: "test"
    },
    mutations: {
        double: function (state) {
            state.msg = state.msg + state.msg;
        }
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = store;
//# sourceMappingURL=store.js.map