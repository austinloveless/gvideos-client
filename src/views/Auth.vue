<template>
  <div class="auth">
    <Header />
    <div class="auth-container">
      <b-card no-body>
        <b-tabs pills card>
          <b-tab title="Login" active>
            <Auth />
          </b-tab>
          <b-tab title="Sign Up">
            <Register />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <Footer />
  </div>
</template>
  <!-- <div class="login">
    <router-view></router-view>
    <Header />
    <div class="main">
      <div class="auth">
        <Auth />
      </div>
    </div>
    <Footer />
  </div> -->

<script>
import Header from '@/components/Header';
import Auth from '@/components/Auth';
import Register from '@/components/Register';
import Footer from '@/components/Footer';

export default {
  name: 'auth',
  components: {
    Header,
    Auth,
    Register,
    Footer,
  },
  data() {
    return {
      tabIndex: 0,
    };
  },
};
</script>

<style scoped>
.auth-container {
  padding-top: 100px;
  /* display: flex;
  justify-content: center; */
  width: 100vw;
  position: fixed;
}
.tabs {
  border-bottom: none !important;
}
.card-header {
  display: flex;
  justify-content: center;
}
.card-header-pills {
  justify-content: center;
}
.card-body {
  padding: 0px;
}
.inline {
  display: inline-block;
}
.auth {
  /* margin-top: 100px; */
  margin-bottom: 1000px;
  margin-top: -1000px;
}
</style>
