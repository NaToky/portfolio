<template>
    <div>
      <div class="Nav">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/software" class="link">Software</router-link>
      <router-link to="/contact" class="link">Contact</router-link>
      <router-link to="/about" class="link">About</router-link>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
.link{
    color: rgb(20, 20, 20);
    text-decoration: none;
    padding: 20px;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
}
.Nav{
    margin-right: 30px;
    position: absolute;
    top: 3%;
    right: 1%;
}
</style>