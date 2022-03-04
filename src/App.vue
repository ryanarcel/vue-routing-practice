<template>
  <HeaderComponent />

  <router-view/>
</template>

<script>
import HeaderComponent from "./includes/Header"


export default {
 
  name: 'App',
  components: {
    HeaderComponent,
 
  }
}
</script>

<style>

</style>
