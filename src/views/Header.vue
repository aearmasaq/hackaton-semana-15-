<template>
  <div class="header">
     <a class="logo"><i class="fab fa-vuejs"></i></a>
    <div class="header-right">
        <router-link  to="/">Home</router-link>       
        <router-link to="/users">List Usuarios</router-link>
         <router-link to="/posts">List Posts</router-link>
          <router-link to="/albums">List Albums</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {box-sizing: border-box;}

body { 
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {  
  width:100%;
  overflow: hidden;
  background-color: #000;
  padding: 10px 80px;  
}

.header a {
  float: left;
  color: #fff;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px; 
  line-height: 50px;
  border-radius: 4px;
}


.header a.logo {
  font-size: 50px;
}

.header a:hover {
    text-decoration: underline overline;
  
}

.header-right {
  float: right;
}

.header a.router-link-exact-active {
  color: #1DB954;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  
  .header-right {
    float: none;
  }
}

</style>
