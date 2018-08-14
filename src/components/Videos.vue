<template>
      <ul class="video-list list-unstyled">
        <b-media class="video shadow" tag="li" v-for="video in videos" :key="video._id">
          <img slot="aside" :src="thumbnail(video.url)" width="250" alt="placeholder" />
          <h4 class="mt-0 mb-1 title"><a :href="video.url">{{ video.title }}</a></h4>
          <h6 class="mt-0 mb-1">Category: {{ video.category }}</h6>
          <h6 class="mt-0 mb-1">Instructor: {{ video.instructor }}</h6>
          <p>{{ video.description }}</p>
          <ul class="tagslist">
            <li class="tag" v-for="tag in video.tags" v-bind:key="tag">{{ tag }}</li>
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
  methods: {
    thumbnail(url) {
      const reg = /=(.*)/;
      const vidId = url.match(reg)[1];
      console.log(vidId);
      const thumb = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
      return thumb;
    },
  },

};
</script>

<style scoped>
.video-list {
  padding-left: 0px;
  padding-right: 0px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
}

.video-list li {
  margin-bottom: 20px;
}

.taglist {
  list-style-type: none;
  padding-left: 0px;
}

.tag {
  display: inline;
  margin-right: 10px;
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

.video {
  border: 1px solid black;
  width: 45%;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
}

.video img {
  max-width: 100%;
  align-self: center;
}
.media.video.shadow a {
    position: relative;
    color: black;
}
</style>
