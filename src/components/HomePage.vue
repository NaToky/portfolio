<template>

  <div class="HomePage">

    <div class="Header">
      <div class="NavMenu">
        <ul>
          <li class="navItem"
          v-for="nav in links"
          v-bind:key="nav.key"
          >
            <router-link :to="nav.ref" class="line">{{ nav.name }} </router-link>
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
          <p id="Description">{{Description}}</p>
        </div>
        <button class="buttonModel" id="aboutButton"> About </button>
      </div>
      <div class="pageSectionTwo">
        <h2 id="pSTittle"> Top projects </h2>
        <div class="projectsHandler">
          <div class="project"
          v-for="projects in projects"
          v-bind:id="projects.id"
          v-bind:key="projects.key"
          >
          </div>
        </div>
        <button class="buttonModel" id="projectsButton"> All Projects </button>
      </div>
      <div class="pageSectionThree">
        <h2 id="pSTittle"> Technical knowledge </h2>

            <div class="languageHandler">
              <div v-for="lang in languages" class="languages">
                <p class="LangTitle">{{lang.name}}</p>
                <div class="LevelBack">
                  <div class="Level" v-bind:style="{height: '100%', 'background-color': '#004e52', width: lang.level + '%'}"></div>
                </div>
              </div>
              <p id="note"> *Based on usage in projects </p>
            </div>

      </div>
    </div>
    <div class="footer">
      <div class="SiteMap"></div>
      <div class="GitHub"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore' +
          'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
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
        ],
        projects: [{
          name: "Portfolio",
          key: "1",
          id: "projectOne"
        },
        {
          name:"Vertigoal",
          key: "2",
          id: "projectTwo"
        },
        {
          name:"Cookie Clicker",
          key: "3",
          id: "projectThree"
        },
        {
          name:"Todo",
          key:"4",
          id:"projectFour"
        }
      ],
      languages: [
      {
      name:"Html/JSX",
      level: 90,
      },
      {
      name:"CSS/SASS",
      level: 90,
      },
      {
      name:"Javascript/JQuery",
      level: 70,
      },
      {
      name:"Vue.js",
      level: 60,
      },
      {
      name:"React.js",
      level: 35,
      },
      {
      name:"Node.js",
      level: 20,
      },
      {
      name:"MongoDB",
      level: 20,
      },
    ]
      }
    }
  }
</script>
