<template>

    <div id="imgConsumidor"></div>
    
    <h4>CONSUMIDOR</h4>   
    <p>Em quase todos os dias das nossas vidas, firmamos contratos de consumo, seja quando entramos em um transporte público, seja quando realizamos uma viajem internacional. A legislação brasileira protege os consumidores contra abusos nas relações de consumo, tentando gerar nas negociações um pouco de equilíbrio. </p>
        
    
    <h4>Alguns serviços oferecidos pelo escritório:</h4>
    
    <ul>
        <li>Ações de obrigação de fazer ou restituir</li>
        <li>Ações indenizatórias</li>
        <li>Entre outros</li>
       
    </ul>
    
    
</template>
    
<style scoped>
    #imgConsumidor{
        border: 2px solid black;
        width: 100%;
        height: 30vw;
        background-image: url("../../public/Imgs/Consumidor.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center; 
    }
    
    
</style>
    
<script>
    export default{
            name: "ConsumidorComponent"
        }
</script>