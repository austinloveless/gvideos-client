<template>
  <ul class="video-list list-unstyled">
    <b-media class="video shadow" tag="li" v-for="video in videos" :key="video._id">
      <img slot="aside" :src="thumbnail(video.url)" alt="placeholder" />
      <h4 class="mt-0 mb-1 title"><a :href="video.url">{{ video.title }}</a></h4>
      <h6 class="mt-0 mb-1">Category: {{ video.category }}</h6>
      <h6 class="mt-0 mb-1">Instructor: {{ video.instructor }}</h6>
      <p>{{ video.description }}</p>
      <ul class="tagslist">
        <li class="tag" v-for="tag in video.tags" v-bind:key="tag">{{ tag }}</li>
      </ul>
      <!-- <b-button class="button btn-success" type="submit" variant="primary">Update</b-button> -->
      <!-- <b-button class="button btn-danger" type="submit" variant="primary">Delete</b-button> -->
      <b-btn v-if="token" v-b-modal.modallg.modal-center variant="primary">Update</b-btn>
      <!-- <b-btn v-if="token" v-b-modal.modal1 variant="danger">Delete</b-btn> -->
      <b-btn v-if="token" @click="onDelete(video)" variant="danger" v-bind="video">Delete</b-btn>
    </b-media>
  </ul>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      token: false,
      videos: [],
      video: this.video,
      tags: [],
      apiURL: 'https://gvideos-api.herokuapp.com/api/videos'
    };
  },
  mounted() {
    fetch(this.apiURL)
      .then(response => response.json())
      .then(response => {
        this.videos = response.reverse();
      });
    if (localStorage.getItem('token')) {
      this.token = true;
    }
  },
  methods: {
    thumbnail(url) {
      if (!/youtube/.test(url))
        return 'https://s3-us-west-2.amazonaws.com/g90/gIcon.png';
      const reg = /=(.*)/;
      const vidId = url.match(reg)[1];
      const thumb = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
      return thumb;
    },
    videoCheck(video) {
      this.video = video;
      console.log(video._id);
    },
    onDelete(video) {
      this.video = video;
      this.deleteURL = `https://gvideos-api.herokuapp.com/api/videos/${
        video._id
      }`;
      console.log(this.deleteURL);
      return fetch(this.deleteURL, {
        method: 'delete'
      }).then(resp => {
        console.log(resp);
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
              const err = { errorMessage: data.message };
              throw err;
            });
          }
          const err = { errorMessage: 'Blah' };
          throw err;
        }
        return resp.json();
      });
    }
  }
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
.video-list li img {
  height: 140px;
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
.media.video.shadow {
  position: relative;
  padding-bottom: 25px;
  min-height: 218px;
}
.media.video.shadow button {
  position: absolute;
  bottom: 10px;
}
.media.video.shadow button:first-of-type {
  left: 15px;
}
.media.video.shadow button:nth-of-type(2n) {
  left: 115px;
}
</style>
