<template>
  <div class="home">
    <router-view></router-view>
    <Header />
    <div class="main">
      <div class="video-container">
        <!-- <div class="col-lg-3 col-md-3 inline filter-container">
          <FormFilter />
        </div> -->
        <div class="col-lg-12 inline">
          <Videos />
        </div>
      </div>
      <UpdateModal />
      <DeleteModal />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header';
import FormFilter from '@/components/FormFilter';
import Videos from '@/components/Videos';
import UpdateModal from '@/components/UpdateModal';
import DeleteModal from '@/components/DeleteModal';
import Footer from '@/components/Footer';
import VueJwtDecode from 'vue-jwt-decode';

export default {
  userLoggedIn: false,
  name: 'home',
  components: {
    Header,
    FormFilter,
    Videos,
    UpdateModal,
    DeleteModal,
    Footer
  },
  data() {
    return {
      videos: null,
      apiURL: 'https://gvideos-api.herokuapp.com/api/videos'
    };
  },
  mounted() {
    fetch(this.apiURL)
      .then(response => response.json())
      .then(response => {
        this.videos = response;
      });
  },
  methods: {
    addVideo(video) {
      this.videos.push(video);
    },
    onSubmit() {
      console.log('Category selected: ', this.form.category);
      fetch(this.apiURL + '/category/' + this.form.category)
        .then(response => response.json())
        .then(response => {
          this.videos = response.reverse();
          // console.log('RESPONSE: ', response);
          console.log(this.videos, 'Hi videos');
        });
    }
  }
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
.modal-footer {
  display: none !important;
}
</style>
