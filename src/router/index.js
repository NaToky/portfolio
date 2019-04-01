import Projects from '../components/projects.vue'
import HomePage from '../components/MainPage-Header.vue'

export default [
  {path:'/',
  components:{
    default:HomePage,
  }
},
{path:'/projects',
component:Projects
}
]
