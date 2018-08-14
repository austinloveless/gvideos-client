<template>
  <ul id="Videos" class="video-list col-lg-12 col-xs-12 col-sm-12">
    <li class="video-card" v-for="video in videos" :key="video._id">
      <div class="col-lg-3 col-xs-12 col-md-6 list-inline">
        <div class="video-card-main">
        <div class="team-front">
        <div class="video-card-img">
          <img :src="video.imageurl" class="img-fluid" :alt="video.name" />
        </div>
        <h3>{{ video.title }}</h3>
        <h6>{{ video.category }}</h6>
        </div>
        <div class="team-back">
          <h5>{{ video.title }}</h5>
          <span>{{ video.description }}</span>
        </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      videos: [],
      apiURL: 'https://gvideos-api.herokuapp.com/api/videos',
    };
  },
  mounted() {
    fetch(this.apiURL)
      .then(response => response.json())
      .then((response) => {
        this.videos = response;
        console.log(this.videos);
      });
  },
};
</script>

<style scoped>
.video-list {
  display: inline;
  padding-left: 0px;
  padding-right: 0px;
}

.video-card {
  display: inline;
}

.list-inline {
  display: inline-flex;
}

.video-card-main {
  width: 100%;
  height: auto;
  border-bottom: 2px solid gray;
  background: #fff;
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  transition: 0.5s;
  margin-bottom: 28px;
}

.video-card-img {
  margin-bottom: 20px;
  height: 90px;
}

.video-card-img img {
  width: auto;
  height: 100%;
}

.video-card-main h3 {
  font-size: 20px;
  font-weight: 700;
}

.video-card-main p {
  margin-bottom: 0;
}

.team-back {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 0 15px;
  text-align: center;
  background: #fff;
}

.team-front {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 10;
  background: #fff;
  padding: 15px;
  bottom: 0px;
  transition: all 0.5s ease;
}
</style>
