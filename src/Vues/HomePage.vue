<template lang="html">
<div>
  <div class="Home">
    <img src="../assets/logo.png" id="logoImg"/>
    <svg width="100%" height="100%">
      <rect y='0' x='0' width="140%" height='100%' fill="black" transform = "translate(-200, 480), rotate(-10 0 0)"/>
    </svg>
    <h1 id="Logo"> ProgMug.net </h1>
  </div>
    <div class="footer">
    </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
.Home{
  width: 100%;
  height: 100vh;
}
#Logo{
  font-size: 42px;
  position: absolute;
  top: 220px;
  left: -50px;
  transform: rotate(-90deg);
  font-family: 'Playfair Display', serif;
}
.footer{
  height: 200px;
  width: 100%;
  background-color: rgb(7, 7, 7);
}
#logoImg{
  position: absolute;
  left: 40px;
  top: 20px;
}
</style>