import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Lesson from '../views/Lesson.vue'
import Accueil from '../views/Accueil.vue'
import About from '../views/About.vue'
import Quiz from '../views/Quiz.vue'

const routes = [
  { path:'/', name:'Accueil', component:Accueil},
  { path:'/about', name:'About', component:About},
  { path:'/login', name:'Login', component:Login },
  { path:'/dashboard', name:'Dashboard', component:Dashboard },
  { path:'/lesson/:id', name:'Lesson', component:Lesson },
  { path:'/lesson/:id/quiz', component: Quiz},
]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router