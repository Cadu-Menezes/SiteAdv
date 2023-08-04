<template>
    <footer class="footer">
        
        <div class="contatos">
          <h1>Nossos Contatos</h1>
          <p>(21) 99999-9999</p>
        </div>
    
        <div class="contatos">
          <h1>Visite nosso escritorio</h1>
          <p>Rua dos bobos N° zero</p>
        </div>
    
        <div class="contatos">
          <h1>Siga-nos nas redes sociais</h1>
        </div>
      
      </footer>
    
    </template>
    
    <style>
    
    .contatos{
        color: white;
        border: 2px solid white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        margin: 15px;
        padding: 15px;
      
    }
      
      
    .footer{
        border-top: 2px solid white;
        background-color: black;
        display: flex;
        flex-direction: row;
        font-size: 16px;
    
    }
    
    </style>
    
    
    
    <script>
    
    export default{
        name: "FinalPage"
    }
    
    </script>