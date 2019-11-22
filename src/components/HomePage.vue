<template lang="html">
  <div class="HomePage">
    <div class="Header">
      <div class="NavMenu">
      </div>
      <h2 id="headerMainText">Welcome to ProgMug, we are a small startup dedicated to build stunning websites for entreprises  </h2>
    </div>

    <div class="MainSection">
      <div class="pageSectionOne">
        <div id="profileImage"></div>
        <div id="profileImageDescription">
          <p id="Description">{{Description}}</p>
        </div>
      </div>

      <div class="pageSection">
        <h2 id="pSTittle"> Products </h2>
        <div class="Product">
        <h2 id="League_Title">League Management Software </h2>
        </div>
        <div class="Product">
        <h2 id="League_Title">Website</h2>
        </div>
      </div>

      <div class="pageSection">
        <h2 id="pSTittle"> Top projects </h2>
        <div class="projectsHandler">
          <a v-for="projects in projects" v-bind:href="projects.href" v-bind:key="projects.key">
            <div class="project" v-bind:id="projects.id">
            </div>
          </a>
        </div>
      </div>

      <div class="pageSection">
        <h2 id="pSTittle"> Used Technologies</h2>
        <div class="languageHandler">
          <div v-for="lang in languages" v-bind:key="lang.key" class="languages">
            <p class="LangTitle">{{lang.name}}</p>
            <div class="LevelBack">
              <div class="Level"
                v-bind:style="{height: '100%', 'background-color': '#004e52', width: lang.level + '%'}"></div>
            </div>
          </div>
          <p id="note"> *Based on usage in projects </p>
        </div>
      </div>
    </div>

    <div class="footer">
      <h1 class="SM_Header">Site Map</h1>
      <div class="SiteMap">
        
      </div>
      <div class="Logo">
        <a href="https://github.com/NaToky/"><img class="FT_Logo" src="../assets/githubLogo.png" alt="GitHub"
            width="40px" height="40px"></a>
        <a href="https://www.linkedin.com/in/sergey-panasenko-838044167/"><img class="FT_Logo"
            src="../assets/linkedinLogo.png" alt="LinkedIn" width="40px" height="40px"></a>
        <a href="https://www.facebook.com/NaToKy24"><img class="FT_Logo" src="../assets/facebookLogo.png" alt="FaceBook"
            width="40px" height="40px"></a>
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
            level: 80,
          },
          {
            name: "Vue.js",
            level: 80,
          },
          {
            name: "React.js",
            level: 35,
          },
          {
            name: "Node.js",
            level: 70,
          },
          {
            name: "MongoDB",
            level: 80,
          },
        ]
      }
    }
  }
</script>