<template>
  <div class="upload">
    <router-view></router-view>
    <Header />
    <div class="main">
      <div class="auth">
        <FormNew />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import router from "../router";
import Header from '@/components/Header';
import FormNew from '@/components/FormNew';
import Footer from '@/components/Footer';

export default {
  name: 'upload',
  components: {
    // router,
    Header,
    FormNew,
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
