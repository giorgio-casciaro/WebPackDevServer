<template lang="jade">
div
  form
    h2(v-if="!isRegistration") Registrati Gratis
    input(type="text",placeholder="email@esempio.com")
    input(type="text",placeholder="password")
    a Registrati Gratis
    small Registrandoti, accetti i termini di utilizzo e la nostra privacy policy
</template>

<script >
  var data={
    isRegistration:true,
  };
  var component={
    data(){ return data; }
  }
  export default component
</script>

<style>
</style>
