<template lang="jade">
div.app
  appHeader
  router-view(name="main") Loading
  appFooter
</template>

<script >
var data={};
var component={
  data(){ return data; },
  components:{
    appHeader:require("components/blocks/complex/appHeader"),
    appFooter:require("components/blocks/complex/appFooter")
  }
}
export default component
</script>

<style>
  p{ white-space: pre;}
  body {
    font : 100% Helvetica, sans-serif;
    color: #ecf0f1;
    text-align: center;
    background-color: #34495e;
  }
  .container {
    margin: 0 auto;
    padding-top: 70px;
  }
</style>
