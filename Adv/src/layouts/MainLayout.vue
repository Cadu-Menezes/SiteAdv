<template>
  <q-layout view="lHh Lpr lFf" class="Container">
    
    <nav class="MenuPag">
      <ul>
        <li><router-link to="#Container">HOME</router-link></li>
        <li><router-link to="#OsSocios">ESCRITÓRIO</router-link></li>
        <li><router-link to="#Atuacao">ÁREAS DE ATUAÇÃO</router-link></li>
      </ul>
    </nav>

    <q-page-container class="Page">
      <router-view />
    </q-page-container>
  
    
    <div id="ImgWpp">
    
      <q-fab style=" background-color: rgb(183, 156, 84);" text-color="black" icon="keyboard_arrow_left" direction="left">
        <template v-slot:label="{ opened }">
          <div :class="{ 'example-fab-animate--hover': opened !== true }">
            {{ opened !== true ? 'Sociais' : 'Fechar' }}
          </div>
        </template>

        <q-fab-action color="primary" @click="onClick" icon="fa-brands fa-facebook" style="color: #ffffff" />
        <q-fab-action  @click="onClick" icon="fab fa-instagram" style="color: #ffffff; background-color: #E0115F;" />
        <q-fab-action @click="onClick" icon="fab fa-whatsapp"  style="color: #ffffff; background-color: green;" />
      </q-fab>
    
    </div>


    <footer class="footer">
    
      <div class="TextosFooter">
        
        <p>DGCAdvogados - Copyrigth - Todos os direitos reservados</p>
        
        <p>+55 (21) 99999-9999</p>
        
        <p>contato@dgcAdvogados.com.br</p>
      </div>
      
    </footer>

  </q-layout>
</template>





<style scoped>

#ImgWpp{
  position: fixed;
  bottom: 50%;
  right: 1%;

}


.Page{
  flex: 1;
  background-color: rgb(11, 20, 10);
  color: white;
}


.Container{
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
}


.TextosFooter{

width: 100%;

display: flex;
justify-content: space-around;
padding-top: 0.5%;

}


.footer{
width: 100%;
height: 100%;
border-top: 2px solid rgb(183, 156, 84) !important;
background-color: rgb(11, 31, 19) !important;
display: flex;
flex-direction: row;
font-size: 16px;
color: white;

}


.MenuPag{
  position: fixed;
  width: 100%;
  z-index: 9999;
  font-weight: bold;
}


#Menu{
  margin:0px !important;
  padding: 0px !important;
  
}  


/* Montando o Menu */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(11, 31, 19);
  border-bottom: 2px solid white;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  border-bottom: 2px solid rgb(183, 156, 84);

}


li a {
  display: block;
  color: rgb(183, 156, 84);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  align-items: center;
}


li a:hover {
  background-color: rgb(183, 156, 84);
  color: black;
  transition: 1s;
}


@media(max-width: 450px){

  .TextosFooter{

    width: 100%;

    display: flex;
    justify-content: space-around;
    padding-top: 0.5%;

  }

  .footer{
    width: 100%;
    height: 100%;
    border-top: 2px solid rgb(183, 156, 84);
    background-color: rgb(11, 31, 19);
    display: flex;
    flex-direction: row;
    font-size: 16px;
    color: white;

  }


}

</style>


<style lang="sass" scoped>
.example-fab-animate,
.q-fab:hover .example-fab-animate--hover
  animation: example-fab-animate 0.82s cubic-bezier(.36,.07,.19,.97) both
  transform: translate3d(0, 0, 0)
  backface-visibility: hidden
  perspective: 1000px

@keyframes example-fab-animate
  10%, 90%
    transform: translate3d(-1px, 0, 0)

  20%, 80%
    transform: translate3d(2px, 0, 0)

  30%, 50%, 70%
    transform: translate3d(-4px, 0, 0)

  40%, 60%
    transform: translate3d(4px, 0, 0)
</style>

<script>
export default {
  methods: {
    onClick () {
      // console.log('Clicked on a fab action')
    }
  }
}
</script>

