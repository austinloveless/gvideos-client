<template>
  <div class="home">
    <router-view></router-view>
    <Header />
    <div class="main">
    <Auth />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import router from "../router";
import Header from '@/components/Header';
import Auth from '@/components/Auth';
import Footer from '@/components/Footer';

export default {
  name: 'home',
  components: {
    // router,
    Header,
    Auth,
    Footer,
  },
};
</script>

<style scoped>
.main {
  padding-top: 100px;
}
</style>
