<template>
  <div class="home">
    <router-view></router-view>
    <Header/>
    <Auth/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import router from "../router";
import Header from "@/components/Header.vue";
import Auth from "@/components/Auth.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    // router,
    Header,
    Auth,
    Footer
  }
};
</script>
