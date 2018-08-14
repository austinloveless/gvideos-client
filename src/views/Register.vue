<template>
  <div class="register">
    <router-view></router-view>
    <Header />
    <div class="main">
      <div class="auth">
        <Register />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import router from "../router";
import Header from '@/components/Header';
import Register from '@/components/Register';
import Footer from '@/components/Footer';

export default {
  name: 'register',
  components: {
    // router,
    Header,
    Register,
    Footer,
  },
};
</script>

<style scoped>
.main {
  padding-top: 100px;
}
.inline {
  display: inline-block;
}
</style>
