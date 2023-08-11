<template>
    
  <!-- Ini IndexPage -->

  <main id="Container">
    <p class="textoadv" id="TxtPrincipal">"O advogado é indispensável à administração da justiça, sendo inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei."</p>
    <p class="textoadv">Constituição da República Federativa do Brasil</p>
  </main>


  <div id="ContainerCards">

      <div id="Cards">

        <div id="Valores">
            <h4 class="Titulo">Valores</h4>
            <p>Atuar com ética, transparência e responsabilidade.</p>
        </div>

        <div id="Missao">
            <h4 class="Titulo">Missão</h4>
            <p>Nossa missão é fornecer ao nosso cliente suporte especializado e de qualidade para qualquer demanda jurídica.</p>
        </div>

        <div id="QuemSomos">
            <h4 class="Titulo">Quem Somos</h4>
            <p>Nosso escritório conta com especialistas nas áreas de direito previdenciário, trabalhista, empresarial, tributário, cível e criminal, possibilitando a prestação de assessoria jurídica, tanto para pessoas físicas, como para pessoas jurídicas,  atuando nas demandas preventivas e contenciosas, para assegurar a defesa dos interesses dos nossos clientes.</p>
        </div>

      </div>

  </div>


  <div id="Atuacao">

    <h1 class="Titulo">Áreas de atuação</h1>

    <div class="textoAreas">
      
      <!-- DIALOG INICIO -->
      <q-dialog v-model="layout">
        <q-layout view="Lhh lpR fff" container class="bg-white text-dark">
          
          <q-header style="background-color: black; opacity: 0.9; font-weight: bold; font-family: 'Abril Fatface', cursive; position: fixed;">
            <q-toolbar>

              <q-toolbar-title>
                {{itemAtivo.texto}}
              </q-toolbar-title>

              <q-btn flat v-close-popup round dense icon="close" /> 
            </q-toolbar>

          </q-header>

          <q-page-container>
            <q-page padding>
              <div v-for="n in contentSize" :key="n">
                                
                <div v-if="itemAtivo.id == 1">
                    <INSSComponent /> 
                </div>

                <div v-if="itemAtivo.id == 2">
                    <TrabalhistaComponent /> 
                </div>

                <div v-if="itemAtivo.id == 3">
                    <CriminalComponent /> 
                </div>

                <div v-if="itemAtivo.id == 4">
                    <TributariaComponent /> 
                </div>

                <div v-if="itemAtivo.id == 5">
                    <ReceFalenciaComponent /> 
                </div>

                <div v-if="itemAtivo.id == 6">
                    <CivilComponent /> 
                </div>

                <div v-if="itemAtivo.id == 7">
                    <ConsumidorComponent /> 
                </div>

                <div v-if="itemAtivo.id == 8">
                    <SucessoesComponent /> 
                </div>

                <div v-if="itemAtivo.id == 9">
                    <FamiliaComponent /> 
                </div>

                <div v-if="itemAtivo.id == 10">
                    <EmpresarialComponent /> 
                </div>
                    
              </div>
            </q-page>
          </q-page-container>
        </q-layout>
      </q-dialog>

      <!-- FIM DIALOG -->
      
      <div id="txt1">
        <div v-for="item in Area1" v-bind:key="item.id" @click="itemAtivo = item; layout = true" class="textoCIcone">
          <i :class="item.icone"></i>
          <p class="TextoIcone">{{ item.texto }}</p>
        </div>
      </div>
      
    </div>

  </div>


  <h3 class="Titulo">Os Sócios</h3>
  
  
  <div id="OsSocios">
    
    
    <div id="ContainerSocios">
      
      <div class="Socios">
        <!-- <img src="../../public/Imgs/Priscila.jpg" alt=""> -->
        <div id="Imagem1"></div>
        <p>Advogada com 18 anos de experiência, especialista em Direito Previdenciário, Familia, Sucessões, Civil e Processo Civil, Conselheira e Presidente da Comissão de Direito Previdenciário da OAB/RJ- Subseção Leopoldina e membro da comissão de Direito Previdenciário da Seccional OAB/RJ.</p>
    
      </div>
      
      <div class="Socios">
        <!-- <img src="../../public/Imgs/Priscila.jpg" alt=""> -->
        <div id="Imagem2"></div>
        <p>Advogado com 15 anos de experiência, especialista em direito criminal, tributário , trabalhista e recuperação judicial e falência, Conselheiro da OAB, Subseção Leopoldina, membro da ANACRIM, membro da Comissão de Segurança Pública da OAB/RJ. </p>

      </div>
      
      <div class="Socios">
        <!-- <img src="../../public/Imgs/Priscila.jpg" alt="Imagem de Advogado 3"> -->
        <div id="Imagem3"></div>
        <p>Advogada com 22 anos de experiência, especialista em direito civil e processual civil.</p>
      </div>

    </div>


  </div>


  <div id="Contato">

    <div id="TextoContato">
      
      <div class="form">
        <h3 class="Titulo">Contato</h3>
        <form id="formContato">
          
          <label for="Nome">Nome:</label>
          <input type="text" name="Nome" id="nome" placeholder="Nome">

          <label for="Email">Email:</label>
          <input type="email" name="Email" id="email" placeholder="Email">
          
          <label for="Message">Mensagem:</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Escreva sua mensagem aqui."></textarea>
          
          <q-btn color="green" icon-right="mail" label="Enviar Email" />

        </form>
        
      </div>
      
          
          
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2478513549113!2d-43.17985932699068!3d-22.904227291913543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5f71b78e25%3A0xdbe393b0eee3f580!2sR.%20da%20Assembl%C3%A9ia%2C%2010%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020011-901!5e0!3m2!1spt-BR!2sbr!4v1691156844212!5m2!1spt-BR!2sbr" width="500" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
    </div>

  </div>


  <!-- Fim Index Page -->
</template>

<style>
/* Ini Css IndexPage */

.form input{
  border-radius: 5px;
  
}

.form textarea{
  border-radius: 5px;
  
}


.form button{
  margin-top: 10px;
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


.TextoIcone{
  margin: 20px 0px 0px 10px;
}


.textoCIcone{
  margin-left: 10px;
  margin-top: 15px;
  word-spacing: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid rgb(183, 156, 84);
  background-color: #275039;

  color: white;

  padding: 2%;

  border-radius: 10px;
  max-width: 30%;
  height: 80%;

  cursor: pointer;
}


.textoCIcone:hover{
  background-color: black;
}


#txt1{

  /* border: 2px solid green; */
  margin:0 auto;
  display: flex;
  align-items: center;
  overflow: auto;;
  margin: 10px;
  
  /* position: initial; */
}


.textoAreas{

  /* border: 2px solid blue; */
  top: 0; left: 0; right: 0;
  width: 100%;
  font-weight: bold;
  display: flex;
}


#Atuacao{

  /* border: 2px solid red; */
  margin-top: 20px;
  color: black;
  text-align: center;

}


#Atuacao h1{
  color: white;
}


html, body{
   
  margin:0px !important;
  padding: 0px !important;
  background-color: rgb(12,30,20);
  color: white;
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
  opacity: .9;
  
}


.textoadv{

  font-family: 'Abril Fatface', cursive;
  align-items: center;
  color: black;
  font-size: 24px;
} 


#TxtPrincipal{
  font-family: 'Abril Fatface', cursive;
  width: 90%;
  text-align: center;
}

/* Fim Css IndexPage */
/* Começo Css Escritorio */

#Imagem1{
/* border: 2px solid yellow; */
width: 100%;
height: 70%;
background-image: url("../../public/Imgs/Priscila.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
}


#Imagem2{
/* border: 2px solid yellow; */
width: 100%;
height: 70%;
background-image: url("../../public/Imgs/Rodrigo.jpg");
background-repeat: no-repeat;
background-size: cover;

}


#Imagem3{
/* border: 2px solid yellow; */
width: 100%;
height: 70%;
background-image: url("../../public/Imgs/Rita.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: center center;
}


.Socios{
border: 3px solid rgb(183, 156, 84);
border-radius: 10px;
width: 30%;
background-color: #275039;
padding: 0.5%;
color: white;
top: 0; left: 0; right: 0;

}


.Socios p{
margin-top: 2%;
font-size: max(12px, 1vw);
}


.Titulo{
  
  text-align: center;
  color: white;
  font-family: 'Abril Fatface', cursive;
  /* font-family: 'Alfa Slab One', cursive;
  font-family: 'Victor Mono', monospace; */
  /* font-family: 'Vina Sans', cursive; */
}


#OsSocios{
/* border: 2px solid black; */
width: 100%;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:0 auto;
margin-bottom: 1%;
}


#ContainerSocios{
/* border: 2px solid blue; */
width: 95%;
height: 90%;
display: flex;
flex-direction: row;    
justify-content: space-around;
}


#Valores{
border: 2px solid rgb(183, 156, 84);
text-align: center;

padding: 0.5%;
border-radius: 10px;
background-color: #275039;
color: white;

}


#Valores h4{
color: rgb(183, 156, 84);

}


#Missao{
border: 2px solid rgb(183, 156, 84);
text-align: center;
margin-top: 2%;
padding: 0.5%;
border-radius: 10px;
background-color: #275039;
color: white;

}


#Missao h4{
color: rgb(183, 156, 84);
}


#QuemSomos{
margin-top: 2%;
border: 3px solid rgb(183, 156, 84);
text-align: center;
width: 90%;
padding: 0.5%;
border-radius: 10px;
background-color: #275039;
color: white;

}


#QuemSomos h4{
color: rgb(183, 156, 84);
}


#Cards{
/* border: 2px solid red;  */
display: flex ;
flex-direction: column;
justify-content: center;
align-items: center; 
width: 100%;
top: 0; left: 0; right: 0;
margin-top: 1%;

}


#ContainerCards{

/* border: 2px solid blue;  */
position: relative;
max-width: 100%;
margin:0 auto;

}


@media(max-width: 860px){


  .Socios{
      border: 3px solid rgb(183, 156, 84);
      border-radius: 10px;
      width: 80%;
      height: 40%;
      align-items: center;
      background-color: #275039;
      padding: 0.5%;
      color: white;
      margin-bottom: 2%;
  }

  .Socios p{
      margin-top: 5%;
      
  }

  #OsSocios{
      /* border: 2px solid black;  */
      width: 100%;
      height: 300vh;
      margin: 0 auto;
      margin-bottom: 1%;
      width: 95%;
      position: relative;
  }

  #ContainerSocios{
      /* border: 2px solid blue; */
      width: 95%;
      
      display: flex;
      flex-direction: column;
      
      align-items: center;


      position: absolute;
      
  }

  #Imagem1{
      /* border: 2px solid yellow; */
      width: 100%;
      background-image: url("../../public/Imgs/Priscila.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
  }

  #Imagem2{
      /* border: 2px solid yellow; */
      width: 100%;
      background-image: url("../../public/Imgs/Rodrigo.jpg");
      background-repeat: no-repeat;
      background-size: cover;
  
  }

  #Imagem3{
      /* border: 2px solid yellow; */
      width: 100%;
      background-image: url("../../public/Imgs/Rita.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
  }


  /* Contato */

  .form button{
      margin-top: 10px;
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
      /* border: 2px solid white;  */
      width: 100%;
      
      display: flex;
      flex-direction: column;
      
  }

  #Contato{
      /* border: 2px solid red;  */
      width: 100%;
  
  }

}

</style>


<script setup>

  import { ref, defineComponent , computed } from 'vue'

  import INSSComponent from 'src/components/INSSComponent.vue';
  import TrabalhistaComponent from 'src/components/TrabalhistaComponent.vue';
  import CriminalComponent from 'src/components/CriminalComponent.vue'; 
  import TributariaComponent from 'src/components/TributariaComponent.vue';
  import ReceFalenciaComponent from 'src/components/ReceFalenciaComponent.vue';
  import CivilComponent from 'src/components/CivilComponent.vue';
  import ConsumidorComponent from 'src/components/ConsumidorComponent.vue';
  import SucessoesComponent from 'src/components/SucessoesComponent.vue';
  import FamiliaComponent from 'src/components/FamiliaComponent.vue';
  import EmpresarialComponent from 'src/components/EmpresarialComponent.vue';


  const slide = ref(1);

  defineComponent({
  name: 'AreasPage'
  })



  const Area1 =  ref([
  {texto: "PREVIDENCIÁRIA (INSS) ", icone: "fas fa-piggy-bank fa-2xl" , id: 1, imagem: "../../public/Imgs/INSS.jpg"},
  {texto: "TRABALHISTA ", icone: "fa-solid fa-briefcase fa-2xl" , id: 2, imagem: "../../public/Imgs/Trabalhista.png"},
  {texto: "CRIMINAL ", icone: "fa-solid fa-handcuffs fa-2xl" , id: 3, imagem: "../../public/Imgs/Criminal.jpg"},
  {texto: "TRIBUTÁRIA ", icone: "fa-solid fa-money-bill-1-wave fa-2xl" , id: 4, imagem: "../../public/Imgs/TRIBUTARIA.jpg"},
  {texto: "RECUPERAÇÃO JUDICIAL / FALÊNCIA ", icone: "fa-solid fa-money-bill-transfer fa-2xl" , id: 5, imagem: "../../public/Imgs/RECEFALENCIA.jpg"},

  {texto: "CIVIL", icone: "fa-solid fa-person fa-2xl" , id: 6, imagem: "../../public/Imgs/CIVIL.jpg"},
  {texto: "CONSUMIDOR", icone: "fa-solid fa-cart-shopping fa-2xl" , id: 7, imagem: "../../public/Imgs/Consumidor.jpg"},
  {texto: "SUCESSÕES (INVENTÁRIO)", icone: "fa-solid fa-cart-flatbed fa-2xl" , id: 8, imagem: "../../public/Imgs/SUCESSOES.jpg"},
  {texto: "FAMÍLIA", icone: "fa-solid fa-people-group fa-2xl" , id: 9, imagem: "../../public/Imgs/FAMILIA.jpg"},
  {texto: "EMPRESARIAL", icone: "fa-solid fa-building fa-2xl" , id: 10, imagem: "../../public/Imgs/EMPRESARIAL.jpg"}

  ])


  const moreContent = ref(true)    
  const layout = ref(false),
  contentSize = computed(() => moreContent.value ? 1 : 5)
  const drawer = ref(false)
  const drawerR =  ref(false)
      
  const itemAtivo = ref(null)

</script>