<template>

  <div class="HomePage">

    <div class="Header">
      <div class="NavMenu">
        <ul>
          <li class="navItem" v-for="nav in links" v-bind:key="nav.key">
            <router-link :to="nav.ref">{{ nav.name }} </router-link>
          </li>
        </ul>
      </div>
      <h2 id="headerMainText">Hello, my name is Sergey Panasenko and I am a Font End Developer </h2>
      <button id="headerMainButton"> Take a look at my work </button>
    </div>

    <div class="MainSection">
      <div class="pageSectionOne">
        <div id="profileImage"></div>
        <div id="profileImageDescription">
          <p id="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        </div>
        <button class="buttonModel" id="aboutButton"> About </button>
      </div>
      <div class="pageSectionTwo">
        <h2 id="pSTittle"> Top 5 projects </h2>
        <div class="projectsHandler">
          <div class="project" id="projectOne">
          </div>
          <div class="project" id="projectTwo">
          </div>
        </div>

        <button class="buttonModel" id="projectsButton"> More Projects </button>
      </div>
      <div class="pageSection3">
        <h2 id="pSTittle"> Language </h2>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        links: [{
            name: "Home",
            ref: "1",
            key: "1"
          },
          {
            name: "Projects",
            ref: "projects",
            key: "2"
          },
          {
            name: "Contact",
            ref: "3",
            key: "3"
          },
          {
            name: "About",
            ref: "4",
            key: "4"
          }
        ]
      }
    }
  }
</script>
