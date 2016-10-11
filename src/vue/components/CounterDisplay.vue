<template>
  <span>Count is {{ counter }}</span>
</template>

<script>
  import store from '../store'

  export default {
    computed: {
      counter () {
        return store.state.counter
      }
    }
  }
</script>
