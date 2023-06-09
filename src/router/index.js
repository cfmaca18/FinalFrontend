import Vue from 'vue'
import VueRouter from 'vue-router'
import RegistrarView from '@/views/Registrar.vue'
import LoginView from '@/views/Login.vue'
import InicioView from '@/views/Inicio.vue'
import ListaProyectoView from '@/views/ListaProyecto.vue'
import VerProyectoView from '@/views/VerProyecto.vue'
import CrearProyectoView from '@/views/CrearProyecto.vue'
import EntregaView from '@/views/Entrega.vue'
import Desarrolladores from '../views/Desarrolladores.vue'
import PoliticasyPrivacidad from '@/views/PoliticasyPrivacidad.vue'
import terminosycondicionesVue from '@/views/terminosycondiciones.vue'
import CrearGrupo from '@/views/CrearGrupo.vue'
import ListaMiembrosGrupo from '@/components/ListaMiembrosGrupo'
import ListaGrupos from '@/components/ListaGrupos'
import AgregarMiembros from '@/components/AgregarMiembros'
import grupo from '@/components/Grupo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/registrar',
    name: 'registrar',
    component: RegistrarView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: InicioView
  },
  {
    path: '/ListaProyecto',
    name: 'ListaProyecto',
    component: ListaProyectoView
  },
  {
    path:'/verProyecto/:id',
    name: 'verProyecto',
    component: VerProyectoView
  },
  {
    path:'/AgregarMiembros/:id',
    name: 'AgregarMiembros',
    component: AgregarMiembros
  },
  {
    path:'/grupo/:id',
    name: 'grupo',
    component: grupo
  },
  {
    path:'/crearProyecto',
    name: 'crearProyecto',
    component: CrearProyectoView
  },
  {
    path:'/entrega',
    name: 'entrega',
    component: EntregaView
  },
  {
    path:'/Desarrolladores',
    name: 'Desarrolladores',
    component: Desarrolladores
  },
  {
    path:'/PoliticasyPrivacidad',
    name: 'PoliticasyPrivacidad',
    component:PoliticasyPrivacidad
  },
  {
    path:'/terminosycondiciones',
    name: 'terminosycndiciones',
    component:terminosycondicionesVue
  },
  {
    path:'/CrearGrupo',
    name: 'CrearGrupo',
    component: CrearGrupo
  },
  {
    path:'/ListaMiembrosGrupo',
    name: 'ListaMiembrosGrupo',
    component: ListaMiembrosGrupo
  },
  {
    path:'/ListaGrupos',
    name: 'ListaGrupos',
    component: ListaGrupos
  }
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
