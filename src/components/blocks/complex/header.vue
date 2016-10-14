<template lang="jade">
div
  Logo
  Menu
</template>

<script >

var subComponents={
  menu:require("components/blocks/tiny/menu"),
  logo:require("components/blocks/tiny/logo")
};

var data={};

var component={
  data(){ return data; },
  components:subComponents
}
export default component
</script>

<style>
</style>
