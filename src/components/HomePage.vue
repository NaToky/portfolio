
<template lang="html">
  <div class="HomePage">
    <div class="Header">
      <div class="NavMenu">
        <ul>
          <li class="navItem" v-for="nav in links" v-bind:key="nav.key">
            <router-link :to="nav.ref" class="line"> {{ nav.name }} </router-link>
          </li>
        </ul>
      </div>
      <h2 id="headerMainText">Hello, my name is Sergey Panasenko and I am a Software Developer. </h2>
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
          <a v-for="projects in projects" v-bind:href="projects.href" v-bind:key="projects.key">
          <div class="project" v-bind:id="projects.id">
          </div>
          </a>
        </div>
        <button class="buttonModel" id="projectsButton"> All Projects </button>
      </div> 
      <div class="pageSectionThree">
        <h2 id="pSTittle"> Technical knowledge </h2>
        <div class="languageHandler">
          <div v-for="lang in languages" v-bind:key="lang.key" class="languages">
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
      <h1 class="SM_Header">Site Map</h1>
      <div class="SiteMap">
          <div class="SM_Section">
          <h1 class="SM_Title">Home Page</h1>
            <p class="SM_UnderTitle">Resume</p>
            <p class="SM_UnderTitle">Top Projects</p>
            <p class="SM_UnderTitle">Technical Knowledge</p>
          </div>
          <div class="SM_Section">
          <h1 class="SM_Title">Projects</h1>
            <p class="SM_UnderTitle">Personal Projects</p>
            <p class="SM_UnderTitle">Group Projects</p>
            <p class="SM_UnderTitle">Client Projects</p>
          </div>
          <div class="SM_Section">
          <h1 class="SM_Title">Contact</h1>
            <p class="SM_UnderTitle">Send Email</p>
          </div>
          <div class="SM_Section">
          <h1 class="SM_Title">About</h1>
            <p class="SM_UnderTitle">Resume</p>
            <p class="SM_UnderTitle">Who I am</p>
          </div>
      </div>
      <div class="Logo">
      <a href="https://github.com/NaToky/"><img class="FT_Logo" src="../assets/githubLogo.png" alt="GitHub" width="40px" height="40px"></a>
      <a href="https://www.linkedin.com/in/sergey-panasenko-838044167/"><img class="FT_Logo" src="../assets/linkedinLogo.png" alt="LinkedIn" width="40px" height="40px"></a>
      <a href="https://www.facebook.com/NaToKy24"><img class="FT_Logo" src="../assets/facebookLogo.png" alt="FaceBook" width="40px" height="40px"></a>
      </div>
      <h1 class="Copyright">Sergey Panasenko © ProgMug.net 2019-2020</h1>
    </div>
  </div>
</template>

<script>
  import './style.css'
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
        ],
        projects: [{
            name: "KingsLeague",
            key: "3",
            href: "http://dev.kingsleague.ca/",
            id: "projectThree"
          },
          {
            name: "Intext Electric",
            key: "4",
            id: "projectFour"
          },
          {
            name: "Vertigoal",
            key: "2",
            href: "https://vertigoal2019bdeb.site/",
            id: "projectTwo"
          },
          {
            name: "Portfolio",
            key: "1",
            href: "https://progmug.net/",
            id: "projectOne"
          },
          {
            name: "Weather",
            key: "5",
            href: "https://progmug.net/",
            id: "projectFive"
          }
        ],
        languages: [{
            name: "Html/JSX",
            level: 90,
          },
          {
            name: "CSS/SASS",
            level: 90,
          },
          {
            name: "Javascript/JQuery",
            level: 70,
          },
          {
            name: "Vue.js",
            level: 70,
          },
          {
            name: "React.js",
            level: 35,
          },
          {
            name: "Node.js",
            level: 60,
          },
          {
            name: "MongoDB",
            level: 60,
          },
        ]
      }
    }
  }
</script>
