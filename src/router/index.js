import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Auth from '../views/Auth';
import Upload from '../views/Upload';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Auth,
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload,
  },
  ],
});
