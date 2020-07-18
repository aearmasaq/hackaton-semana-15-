<template>
   <footer class="footer">
        <div class="container__cards">
            <div class="grid-container">
                <div class="card">
                    <div class="footer__icon">
                        <a href=""><i class="fab fa-vuejs"></i></a>
                    </div>        
                </div>

              <div class="card">                  
                  <dl class="card__title">
                      <dt>COMPAÑÍA</dt>
                  </dl>
                 <div class="card__datos__footer">
                    <dl>
                        <dd>Acerca de</dd>
                        <dd>Empleo</dd>
                        <dd>For the Record</dd>
                    </dl>
                 </div>                  

              </div>  

              <div class="card">
                   <dl class="card__title">
                       <dt>COMUNIDADES</dt>
                   </dl>
                  <div class="card__datos__footer">
                    <dl>
                        <dd>Para artistas</dd>
                        <dd>Desarrolladores</dd>
                        <dd>Marcas</dd>
                        <dd>Inversionistas</dd>
                        <dd>Proveedores</dd>                    
                      </dl>
                    
                  </div>                       
              </div>

              <div class="card">
                  <dl class="card__title">
                      <dt>
                        ENLACES ÚTILES
                      </dt>
                  </dl>
                                    
                  <div class="card__datos__footer">
                    <dl>
                        <dd>Ayuda</dd>
                        <dd>Reproductor web</dd>
                        <dd>App móvil gratis</dd>
                    </dl>
                  </div>
                   
              </div>

              <div class="card">
                   
              </div>
              <div class="card">
                <div class="logo__container">
                     <div class="footer__icon__rs">
                        <a  href=""><i class="fab fa-instagram"></i></a>
                    </div> 
                    <div class="footer__icon__rs">
                        <a href=""><i class="fab fa-twitter"></i></a>
                    </div> 
                    <div class="footer__icon__rs">
                        <a href=""><i class="fab fa-facebook-f"></i></a>
                    </div> 
                </div>  
              </div>    
            </div>
        </div> 
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    width: 100%;
    height: 75px;
    background-color: aqua;
    text-align: center;
    font-size: 20px;
}

.main{
    width: 100%;
    height: 500px;
    background-color: yellowgreen;
    text-align: center;
    font-size: 20px;
}

.container__cards {
    width: inherit; 
    padding-left: 50px;
    padding-right: 50px;
    background-color: #000;
    
  }


  .grid-container {   
    padding: 50px;   
    display: grid;
   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
   grid-gap: 20px;    
  }  

  .card{
    width: 150px;
    height: inherit;    
    transition: 0.3s;
    border-radius: 5px;    
  }

  .footer__icon {
    font-size: 50px;
  }

  .fab{
      color:#fff;
  }

  .fab:hover{
    color: #1DB954;
    font-size: 51px;
  }

  .footer__icon__rs{    
    text-align: center; 
    font-size: 40px;
    color: #fff;   
    padding: 5px;    
  }

  .footer__icon__rs:hover{
    color: #1DB954;
  }

  .card__datos__footer{
      color: #fff;
      line-height: 40px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
  }

  .card__datos__footer dd:hover{
      color: #1DB954;
  }

  .card__title{
    color: #919496;
    font-size: 12px;
    font-weight: 900;
    line-height: 1.4;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .logo__container{
      display: flex;     
  }


</style>