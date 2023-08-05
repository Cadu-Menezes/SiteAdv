<template>
  <q-layout view="lHh Lpr lFf" class="Container">
    
    <nav>
      <ul>
        <li><router-link to="/Home">HOME</router-link></li>
        <li><router-link to="/Escritorio">ESCRITÓRIO</router-link></li>
        <li><router-link to="AboutView">ÁREAS DE ATUAÇÃO</router-link></li>
        <li><router-link to="AboutView">ESSA É PRA VOCÊ</router-link></li>
      </ul>
    </nav>

    <q-page-container class="Page">
      <router-view />
    </q-page-container>

    <div id="ImgWpp">
      <img src="../../public/Imgs/whatsapp.png" alt="" width="70">
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





<style>

#ImgWpp{
  position: fixed;
  bottom: 50%;
  right: 1%;

}

.Page{
  flex: 1;
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

  
  height: 6vh;
  border-top: 2px solid rgb(183, 156, 84);
  background-color: rgb(11, 31, 19);
  display: flex;
  flex-direction: row;
  font-size: 16px;
  color: white;

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
}


</style>


<script>

</script>

