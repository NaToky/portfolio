<template>
<div class="Header">
  <div class="NavMenu">
    <ul>
      <li class="navItem" v-for="nav in links" v-bind:key="nav.key"><router-link :to="nav.ref">{{ nav.name }} </router-link> </li>
    </ul>
  </div>
  <h2 id="headerMainText">Hello, my name is Sergey Panasenko and I am a Font End Developer </h2>
  <button id="headerMainButton"> Take a look at my work </button>
</div>
</template>

<script>
export default {
  name: 'MPHeader',
  data () {
    return {
      links:[
        {name: "Home", ref:"1",key:"1"},
        {name: "Projects", ref:"projects",key:"2"},
        {name: "Contact", ref:"3",key:"3"},
        {name: "About", ref:"4",key:"4"}
      ]
    }
  }
}
</script>
