<template lang="html">
<div>
  <div class="Home">
    <img src="../assets/logo.png" id="logoImg"/>
    <svg width="100%" height="100%">
      <rect y='0' x='0' width="140%" height='100%' fill="black" transform = "translate(-200, 450), rotate(-9 0 0)"/>
    </svg>
    <div class="Anno">
      <h4> New </h4>
      <h2> SPORT LEAGUE MANAGMENT S/W </h2>
      <p> Introducing a more efficient and easier way to manage your sport business.
      Have a more fluid way of keeping track of the league's data. Reduce the time 
      spent on managing your website and let our software do it for you. 
      </p>
      <h3> learn more ...</h3>
    </div>
    <svg class="wave" xmlns="http://www.w3.org/2000/svg" width="100%" height="80" viewBox="0 0 1920 80">
    <path id="Path_3" data-name="Path 3" d="M0,364.809s384.677-36.413,841.347-7.961,423.707,40.678,673.757,49.864,405.345,0,405.345,0v16.461H0Z" transform="translate(0.5 -345.389)" fill="rgba(29,91,95,0.27)" stroke="rgba(0,117,0,0.56)" stroke-width="1" opacity="0.88"/>
    </svg>
    <svg class="wave" id="wave2" xmlns="http://www.w3.org/2000/svg" width="100%" height="240" viewBox="0 0 1920 200">
    <path id="Path_2" data-name="Path 2" d="M1908.6,765.91c-2.13,2.342-481.929-6.545-802.616-72.223S-10.452,585.1-10.452,585.1V804.339H1908.6S1910.732,763.568,1908.6,765.91Z" transform="translate(11.452 -584.049)" fill="#004e52" stroke="rgba(94,255,132,0.6)" stroke-width="2" opacity="0.42"/>
    </svg>

    <h1 id="Logo"> ProgMug.net </h1>
    </div>
    <div class="footer">
      <div class="section">
      <h2> Buisiness </h2>
      <p> Privacy Policy </p>
      <p> Privacy Policy </p>
      </div>
      <div class="section">
      <h2> Contact </h2>
      <p> progmug.support@gmail.com </p>
      <p> progmug.net@gmail.com </p>
      </div>
      <p> All rights reserved ProgMug 2020-2021 </p>
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
  background-color: rgb(12, 12, 12);
}
#logoImg{
  position: absolute;
  left: 40px;
  top: 20px;
}
.wave{
  position: absolute;
  bottom: 0px;
  left: 0px;
  animation: wave 5s linear infinite;
  background-position: 0 bottom;
  transform-origin: center bottom;
  width: 100%;
}
#wave2{
  animation: wave 10s linear infinite;
}
.Anno{
  position: absolute;
  top: 40%;
  left: 30%;
}
.Anno > p{
  color: white;
  width: 70%;
  font-size: 20px;
}
.Anno > h2{
  color: #22F9BF;
  margin-bottom: 10px;
  width: 70%;
  font-size: 20px;
}
.Anno > h4{
  color: #004E52;
  margin-left: -20px;
  margin-bottom: 2px;
  width: 70%;
  font-size: 20px;
}
.Anno > h3{
  color: #22F9BF;
  float: right;
  margin-bottom: 2px;
  width: 40%;
  font-size: 20px;
}
.footer > p{
  color: white;
  float: right;
  margin-top: 160px;
  margin-right: 20px;
  font-size: 15px;
}
.section{
  display:inline-block;
  padding: 30px;
  margin-top: 25px;
  margin-left: 20px;
}
.section > h2{
color: #004E52;
margin-bottom: 10px;
}
.section > p{
color: #22F9BF;
margin-bottom: 5px;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
@keyframes wave {
    0% {
        transform: translateX(0%) translateZ(0) scaleY(1)
    }
    50% {
        transform: translateZ(0) scaleY(0.8)
    }
    100% {
        transform: translateZ(0) scaleY(1)
    }
}
</style>