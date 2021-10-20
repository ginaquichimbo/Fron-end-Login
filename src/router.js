import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Registro from './views/Registro.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/registro',
      component: Registro
    },
    {
      path: '/perfil',
      name: 'perfil',
      // lazy-loaded
      component: () => import('./views/Perfil.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/ContenidoAdmin.vue')
    },
   
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/ContenidoUser.vue')
    }
  ]
});