<template>
  <div id="home"> 
     <img alt="Vue logo" src="../assets/logo.png">     
    <VistaHome/>     
  </div>
</template>

<script>
// @ is an alias to /src
import VistaHome from '@/components/VistaHome.vue'


export default {
  name: 'Home',
  components: {
    VistaHome,
     
  }
}
</script>
<style scoped>
#home {
 text-align: center;
}

</style>