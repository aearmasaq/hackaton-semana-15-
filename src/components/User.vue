<template>
  <div class="user">
        <button @click="obtenerUsuarios">obtenerUsuarios</button>
     <ul  v-for="user in usuarios" :key="user.id">
         <li>{{user.username}}</li>
    </ul>    
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name: 'User',
    data() {
        return {}
    },
    computed: {
        ...mapState(['usuarios'])
    },
   methods:{       
        ...mapActions(['obtenerUsuarios'])
    }
}
</script>


<style scoped>


</style>