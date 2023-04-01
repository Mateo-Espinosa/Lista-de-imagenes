import { createRouter, createWebHistory } from 'vue-router'
import infoView from '@/views/infoView.vue'
import mainView from '@/views/mainView.vue'
import helpView from '@/views/helpView.vue'
import aboutView from '@/views/AboutView.vue'
import contactView from '@/views/contactView.vue'
import tiendaView from '@/views/cardView.vue'
import consulServeView from '@/views/consulServe.vue'

const routes = [
  {
    path: '/info',
    name: 'info',
    component: infoView
  },
  {
    path: '/main',
    name: 'main',
    component: mainView
  },
  {
    path: '/help',
    name: 'help',
    component: helpView
  },
  {
    path: '/about',
    name: 'about',
    component: aboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactView
  },
  {
    path: '/',
    name: 'tienda',
    component: tiendaView
  },
  {
    path: '/imagenes',
    name: 'imagenes',
    component: consulServeView
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
