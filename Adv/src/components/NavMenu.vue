<template>
    <nav>
        <ul>
            <li><router-link to="/Home">Home</router-link></li>
            <li><router-link to="/Escritorio">ESCRITÓRIO</router-link></li>
            <li><router-link to="AboutView">ÁREAS DE ATUAÇÃO</router-link></li>
            <li><router-link to="AboutView">ESSA É PRA VOCÊ</router-link></li>
        </ul>
    </nav>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
  background-color: black;
  border-bottom: 2px solid white;
  display: flex;
  justify-content: center;
  flex-direction: row;
}



li a {
  display: block;
  color: #FFC869;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  align-items: center;
}


li a:hover {
  background-color: #111;
}

</style>

<script>

export default{
    name: "NavMenu"
}

</script>
