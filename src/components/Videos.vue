<template>
  <ul class="video-list list-unstyled">
    <b-media tag="li" v-for="video in videos" :key="video._id">
      <b-img slot="aside" blank blank-color="#cba" width="150" alt="placeholder" />
      <h4 class="mt-0 mb-1 title">{{ video.title }}</h4>
      <h6 class="mt-0 mb-1">Category: {{ video.category }}</h6>
      <h6 class="mt-0 mb-1">Instructor: {{ video.instructor }}</h6>
      <p>{{ video.description }}</p>
      <ul class="tags">
        <li v-for="tag in video.tags" v-bind:key="tag">{{ tag }}</li>
      </ul>
    </b-media>
  </ul>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      videos: [],
      tags: [],
      apiURL: 'https://gvideos-api.herokuapp.com/api/videos',
    };
  },
  mounted() {
    fetch(this.apiURL)
      .then(response => response.json())
      .then((response) => {
        this.videos = response.reverse();
        console.log(this.videos);
      });
  },
};
</script>

<style scoped>
.video-list {
  padding-left: 0px;
  padding-right: 0px;
  margin-top: 30px;
}

.video-list li {
  margin-bottom: 20px;
}

.tags {
  list-style-type: none;
  padding-left: 0px;
}

.title {
  padding-top: 10px;
}

.video-card {
  display: inline;
}

.list-inline {
  display: inline-flex;
}
</style>
