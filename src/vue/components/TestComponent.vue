<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <pre>{{ testComputed }}</pre>
    <input type="button" v-on:click="test" />
    <input type="button" v-on:click="testStoreCommit" />
  </div>
</template>

<script>

  import store from '../store.ts'

  export default {
    data() {
      return {
        msg: 'Hello Vue!'
      }
    },
    computed: {
      testComputed () {
        console.log("testComputed this",this)
        return store.state.msg
      }
    },
    methods: {
      test: function () {
        console.log("store.state.msg",store.state.msg)
        console.log("this",this)
        this.msg = "test"
      },
      testStoreCommit: function () {
        store.commit('double');
        console.log("store.state",store.state.msg)
      }
    }
  }
</script>
