<template>
  <span><button @click.prevent="activate">+1</button></span>
</template>

<script>
  import store from '../store'

  export default {
    computed: {
      counter () {
        return store.state.counter
      }
    },
    methods: {
      activate () {
        store.dispatch('INCREMENT')
      }
    }
  }
</script>
