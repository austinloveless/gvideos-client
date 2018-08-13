<template>
  <div class="home">
    <router-view></router-view>
    <Header />
    <div class="main">
    <Auth />
    <Videos />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import router from "../router";
import Header from '@/components/Header';
import Auth from '@/components/Auth';
import Videos from '@/components/Videos';
import Footer from '@/components/Footer';

export default {
  name: 'home',
  components: {
    // router,
    Header,
    Auth,
    Videos,
    Footer,
  },
};
</script>

<style scoped>
.main {
  padding-top: 100px;
}
</style>
