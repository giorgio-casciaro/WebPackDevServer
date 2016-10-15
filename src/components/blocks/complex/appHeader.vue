<template lang="jade">
div
  appLogo
  appMenu
</template>

<script >

var subComponents={
  appMenu:require("components/blocks/tiny/menu"),
  appLogo:require("components/blocks/tiny/logo")
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
