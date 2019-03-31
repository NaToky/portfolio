import Projects from '../components/projects.vue'
import MPHeader from '../components/MainPage-Header.vue'
import MPMain from '../components/MainPage-MainSection.vue'
export default [
  {path:'/',
  components:{
    default:MPHeader,
    main: MPMain,
  }
},
{path:'/projects',
component:Projects
}
]
