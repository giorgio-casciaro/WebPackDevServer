<template lang="jade">
div.app
  header
  router-view(name="main") Loading
  footer
</template>

<script >
var data={};
var component={
  data(){ return data; },
  components:{
    header:require("components/blocks/complex/header"),
    footer:require("components/blocks/complex/footer")
  }
}
export default component
</script>

<style>
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
