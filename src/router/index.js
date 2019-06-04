import Projects from '../components/Project.vue'
import HomePage from '../components/HomePage.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'

export default [
  {
    path:'/',
    component:HomePage

  },
  {
    path:'/projects',
    component:Projects
  },
  {
    path:'/about',
    component:About
  },
  {
    path:'/contact',
    component:Contact
  },
]
