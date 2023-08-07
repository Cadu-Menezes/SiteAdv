<template>
 
 <div id="ContainerCards">

    <Div id="Cards">

      <Div id="QuemSomos">
          <h4>Quem Somos</h4>
          <p>Nosso escritório conta com especialistas nas áreas de direito previdenciário, trabalhista, empresarial, tributário, cível e criminal, possibilitando a prestação de assessoria jurídica, tanto para pessoas físicas, como para pessoas jurídicas,  atuando nas demandas preventivas e contenciosas, para assegurar a defesa dos interesses dos nossos clientes.</p>
      </Div>

      <Div id="Missao">
          <h4>Missão</h4>
          <p>Nossa missão é fornecer ao nosso cliente suporte especializado e de qualidade para qualquer demanda jurídica.</p>
      </Div>

      <Div id="Valores">
          <h4>Valores</h4>
          <p>Atuar com ética, transparência e responsabilidade.</p>
      </Div>

    </Div>

  </div>

  <div id="OsSocios">
    <h3 class="Titulo">Os Sócios</h3>
    
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
</template>

<style>

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
}

.Titulo{
  text-align: center;
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
  margin-top: 2%;
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

</style>






<script>
import { defineComponent } from "vue";

defineComponent({
  name: "EscritorioPage",
});
</script>
