import HomePage from '../Vues/HomePage.vue'
import Software from '../Vues/Software.vue'
import Contact from '../Vues/Contact.vue'
import About from '../Vues/About.vue'

export default [
  {
    path:'/',
    component:HomePage

  },
  {
    path:'/software',
    component:Software

  },
  {
    path:'/contact',
    component:Contact

  },
  {
    path:'/about',
    component:About

  },
]
