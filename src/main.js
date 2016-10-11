"use strict";
//import {Vue} from 'av-ts'
var app_vue_1 = require('./vue/app.vue');
var store_1 = require('./vue/store');
//var Vuex = require('vuex');
var Vue = require('vue');
//Vue.use(Vuex)
new Vue({
    el: '#app',
    store: store_1.default,
    render: function (h) { return h(app_vue_1.default); }
});
//# sourceMappingURL=main.js.map