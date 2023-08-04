<template>

  <main id="Container">
    <p id="textoadv">"O advogado é indispensável à administração da justiça, sendo inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei."</p>
    <p>Constituição da República Federativa do Brasil</p>
  </main>

  <div class="q-pa-md" id="Carrossel">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="../../public/Imgs/Sala.jpg" />
      <q-carousel-slide :name="2" img-src="../../public/Imgs/Vista.jpg" />
      <q-carousel-slide :name="3" img-src="../../public/Imgs/Escritorio.jpg" />
      <q-carousel-slide :name="4" img-src="../../public/Imgs/recepcao.jpg" />

  
    </q-carousel>
  </div>

  <Div id="Atuacao">

    <h1>Áreas de atuação</h1>

    <div class="textoAreas">
            
      <div id="txt1">
      <p>PREVIDENCIÁRIA (INSS)</p>
      <p>TRABALHISTA</p>
      <p>CRIMINAL</p>
      <p>TRIBUTÁRIA</p>
      <p>RECUPERAÇÃO JUDICIAL / FALÊNCIA</p>
      </div>

      <div id="txt2">
      <p>CIVIL</p>
      <p>CONSUMIDOR</p>
      <p>SUCESSÕES (INVENTÁRIO)</p>
      <p>FAMÍLIA</p>
      <p>EMPRESARIAL</p>
      </div>

    </div>

  </Div>
  
</template>

<style>


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
  
  display: flex;
  height: 45vh;
  justify-content: space-evenly;
  
}

html, body{
  margin:0px !important;
  padding: 0px !important;
  
}



#Container{
    width: 100%;
    height: 25vh;
    padding-top: 5%;
    
    color: black;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
      
}

#textoadv{
  color: black;
} 
  

</style>


<script setup>

import { ref, defineComponent } from 'vue'

const slide = ref(1);

defineComponent({
  name: 'IndexPage'
})

</script>