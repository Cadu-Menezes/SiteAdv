<template>

  <main id="Container">
    <p class="textoadv" id="TxtPrincipal">"O advogado é indispensável à administração da justiça, sendo inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei."</p>
    <p class="textoadv">Constituição da República Federativa do Brasil</p>
  </main>


  <Div id="Atuacao">

    <h1>Áreas de atuação</h1>

    <div class="textoAreas">
      
      <div id="txt1">
        <div :key="index" v-for="(item, index) in Area1" class="textoCIcone">
          <i :class="item.icone"></i>
          <p class="TextoIcone">{{ item.texto }}</p>
        </div>
      </div>
      

      <div id="txt2">
        <div :key="index" v-for="(item, index) in Area2" class="textoCIcone">
          <i :class="item.icone"></i>
          <p class="TextoIcone">{{ item.texto }}</p>
        </div>
      </div>

    </div>

  </Div>
  
  <div id="Contato">

    <div id="TextoContato">
      
      <div class="form">
        <h3>Contato</h3>
        <form id="formContato">
          
          <label for="Nome">Nome:</label>
          <input type="text" name="Nome" id="nome" placeholder="Nome">

          <label for="Email">Email:</label>
          <input type="email" name="Email" id="email" placeholder="Email">
          
          <label for="Message">Mensagem:</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Escreva sua mensagem aqui."></textarea>
          
          <button type="submit">Enviar</button>

        </form>
        
      </div>
      
          
          
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2478513549113!2d-43.17985932699068!3d-22.904227291913543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5f71b78e25%3A0xdbe393b0eee3f580!2sR.%20da%20Assembl%C3%A9ia%2C%2010%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020011-901!5e0!3m2!1spt-BR!2sbr!4v1691156844212!5m2!1spt-BR!2sbr" width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
    </div>

  </div>

</template>

<style>

.form button{
  margin-top: 10px;
}

.TextoIcone{
  margin: 0px 0px 0px 10px;
}

.textoCIcone{
  margin-left: 10px;
  margin-top: 15px;
  word-spacing: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 0;
}

#formContato{
  width: 100%;
  /* border: 2px solid orange; */
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.form{
  /* border: 2px solid darkgreen; */
  width: 50%;
}

#TextoContato{
  /* border: 2px solid blue; */
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
}

#Contato{
  /* border: 2px solid red; */
  width: 100%;
  
  
}

#txt1{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: initial;
  margin: 10px;
  align-items: center;
  
}

#txt2{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 10px;
  align-items: center;
}

#Atuacao{
  margin-top: 20px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  
  flex-direction: column;
}

#Atuacao h1{
  color: black;
}

.textoAreas{
  
  width: 100%;
  font-weight: bold;
  display: flex;
  height: 45vh;
  justify-content: space-evenly;
  
}

html, body{
  margin:0px !important;
  padding: 0px !important;
  
}



#Container{
    font-weight: bold;
    width: 100%;
    height: 100vh;
    padding-top: 5%;
    background-image: url("../../public/Imgs/Martelo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: black;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-attachment: fixed;
    
}

.textoadv{
  

  align-items: center;
  color: black;
  font-family: 'Alfa Slab One', cursive;
  font-family: 'Victor Mono', monospace;

  font-size: 24px;
} 

#TxtPrincipal{
  width: 90%;
}
  

</style>


<script setup>

import { ref, defineComponent } from 'vue'

const slide = ref(1);

defineComponent({
  name: 'IndexPage'
})


const Area1 =  ref([
  {texto: "PREVIDENCIÁRIA (INSS) ", icone: "fa-solid fa-piggy-bank fa-2xl"},
  {texto: "TRABALHISTA ", icone: "fa-solid fa-briefcase fa-2xl"},
  {texto: "CRIMINAL ", icone: "fa-solid fa-handcuffs fa-2xl"},
  {texto: "TRIBUTÁRIA ", icone: "fa-solid fa-money-bill-1-wave fa-2xl"},
  {texto: "RECUPERAÇÃO JUDICIAL / FALÊNCIA ", icone: "fa-solid fa-money-bill-transfer fa-2xl"}
  ])

const Area2 =  ref([

  {texto: "CIVIL", icone: "fa-solid fa-person fa-2xl"},
  {texto: "CONSUMIDOR", icone: "fa-solid fa-cart-shopping fa-2xl"},
  {texto: "SUCESSÕES (INVENTÁRIO)", icone: "fa-solid fa-cart-flatbed fa-2xl"},
  {texto: "FAMÍLIA", icone: "fa-solid fa-people-group fa-2xl"},
  {texto: "EMPRESARIAL", icone: "fa-solid fa-building fa-2xl"}
])

</script>