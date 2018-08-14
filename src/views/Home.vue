<template>
  <div class="home">
    <router-view></router-view>
    <Header />
    <div class="main">
      <div class="video-container">
        <div class="col-lg-3 inline filter-container">
          <FormFilter/>
        </div>
        <div class="col-lg-9 inline">
          <Videos />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header';
import FormFilter from '@/components/FormFilter';
import Videos from '@/components/Videos';
import Footer from '@/components/Footer';

export default {
  name: 'home',
  components: {
    Header,
    FormFilter,
    Videos,
    Footer,
  },
};
</script>

<style scoped>
.main {
  padding-top: 100px;
}
.video-container {
  display: inline-flex;
  width: 100%;
}
.filter-container {
  border-right: 2px solid gray;
}
.inline {
  display: inline-block;
}
</style>
