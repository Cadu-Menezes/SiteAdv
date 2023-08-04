<template>
  <q-layout view="lHh Lpr lFf">
    
    <nav>
      <ul>
        <li><router-link to="/Home">Home</router-link></li>
        <li><router-link to="/Escritorio">ESCRITÓRIO</router-link></li>
        <li><router-link to="AboutView">ÁREAS DE ATUAÇÃO</router-link></li>
        <li><router-link to="AboutView">ESSA É PRA VOCÊ</router-link></li>
      </ul>
    </nav>

    <q-page-container>
      <router-view />
    </q-page-container>


    <footer class="footer">
    
      <div class="cardMapa">
        
        <div class="ContainerCardMapa">
          <div class="TextoMapa">
            <p class="TituloFooter">Visite nosso escritorio</p>
            <p>Rua da Assembleia, 10, Sala 3.614 Centro - Rio de Janeiro/RJ</p>
          </div>
          
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2478513549113!2d-43.17985932699068!3d-22.904227291913543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5f71b78e25%3A0xdbe393b0eee3f580!2sR.%20da%20Assembl%C3%A9ia%2C%2010%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020011-901!5e0!3m2!1spt-BR!2sbr!4v1691156844212!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div id="ContainerFooter">

          <div class="cards">
            <p class="TituloFooter">Nossos Contatos</p>
            <p>(21) 99999-9999</p>
            <p>(21) 99999-9999</p>
          </div>

          <div class="cards">
            <p class="TituloFooter">Siga-nos nas redes sociais</p>
            
            <div id="iconesFooter">
              <i class="fa-brands fa-instagram fa-bounce fa-2xl" style="color: #e60fdf;" ></i>
              <i class="fa-brands fa-facebook fa-bounce fa-2xl" style="color: #065ff9;"></i>

            </div>

          </div>

        </div>

      </div>
      
    </footer>

  </q-layout>
</template>





<style>

.TextoMapa{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2%;
}

.ContainerCardMapa{
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  
}

.cardMapa{
  width: 100%;
  color: white;
  /* border: 2px solid blue; */
}

#iconesFooter{
  
  width: 55%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
}

#ContainerFooter{
  /* border: 2px solid yellow; */
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.TituloFooter{
  
  font-size: 23px;
}

.cards{

  color: white;
  border: 2px solid rgb(183, 156, 84);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin: 15px;
  padding: 15px;
  border-radius: 10px;
      
}
      
      
.footer{

  
  height: 100vh;
  border-top: 2px solid rgb(183, 156, 84);
  background-color: rgb(11, 31, 19);
  display: flex;
  flex-direction: row;
  font-size: 16px;

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

