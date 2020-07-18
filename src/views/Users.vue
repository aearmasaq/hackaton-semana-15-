<template>
  <div class="user">
    <h1>Lista de usuarios</h1>
     <User></User>
  </div>
</template>
<script>
// @ is an alias to /src
import User from '@/components/User.vue'


export default {
  name: 'user',
  components: {
    User     
  }  
}
</script>