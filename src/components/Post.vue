<template>
  <div class="user">       
     <ul  v-for="post in posts" :key="user.id">
         <li>{{post.title}}</li>
    </ul>    
    
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name: 'Posts',
    data() {
        return {}
    },
    computed: {
        ...mapState(['posts'])
    },
   created:{       
        ...mapActions(['obtenerPosts'])
    }
}
</script>


<style scoped>


</style>