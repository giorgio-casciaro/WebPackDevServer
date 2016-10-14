<template lang="jade">
div
  presentation test
  registration test
</template>

<script >

var subComponents={
  presentation:require("components/blocks/complex/presentation"),
  registration:require("components/blocks/complex/registration")
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
