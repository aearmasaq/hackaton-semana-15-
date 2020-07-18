<template>
  <div id="app">
    <Header></Header> 
    <router-view/> 
    <Footer></Footer>     
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/views/Header.vue'
import Footer from '@/views/Footer.vue'


export default {
  name: 'Home',
  components: {
     Header,  
     Footer  
  }
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0px;
 }

body { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
