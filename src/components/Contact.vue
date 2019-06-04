<template>
  <div class="projects">
          <div class="NavMenu">
        <ul>
          <li class="navItem" v-for="nav in links" v-bind:key="nav.key">
            <router-link :to="nav.ref" class="line"> {{ nav.name }} </router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default{
    name: 'Projects',
    data (){
      return{
        message: 'hello',
        links: [{
            name: "Home",
            ref: "/",
            key: "1"
          },
          {
            name: "Projects",
            ref: "projects",
            key: "2"
          },
          {
            name: "Contact",
            ref: "contact",
            key: "3"
          },
          {
            name: "About",
            ref: "about",
            key: "4"
          }
        ]
      }
    }
  }


</script>