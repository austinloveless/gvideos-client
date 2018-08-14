// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import router from './router';
import Header from './components/Header';
// import Footer from './components/Footer';
import Auth from './components/Auth';

Vue.component('icon', Icon);

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  Header,
  // Footer,
  Auth,
  template: '<App/>',
  components: {
    App,
  },
});
