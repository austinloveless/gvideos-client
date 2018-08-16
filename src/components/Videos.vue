<template>
  <div class="col-lg-12">
    <div class="row">
    <div class="col-lg-3">
      <div id='filters' class="filters">
        <div>
          <b-form @submit.prevent="filterCheck">
            <h4 class="filtertitle">Filter Videos By:</h4>
            <b-form-group id="categories"
                        label="Category"
                        label-for="category">
              <b-form-select v-model="form.category">
                <option :value="null">Select a Category</option>
                <option value="frontenddesign">Front-End Design</option>
                <option value="frontenddevelopment">Front-End Development</option>
                <option value="frontendframeworks">Front-End Frameworks</option>
                <option value="backendydatabase">Back-End (With Database)</option>
                <option value="backendndatabase">Back-End (No Database)</option>
                <option value="fullstack">Full-Stack</option>
                <option value="oop">Object Oriented Programming</option>
                <option value="workflow">Workflow (Git)</option>
                <option value="other">Other</option>
              </b-form-select>
            </b-form-group>
            <h4 class="filtertitle">Or</h4>
            <b-form-group id="instructors"
                          label="Instructor"
                          label-for="instructor">
              <b-form-select id="instructor"
                            :options="instructors"
                            v-model="form.instructor">
              </b-form-select>
            </b-form-group>
            <!-- <b-form-group id="tagGroup"
                          label="Tags"
                          label-for="tags">
              <b-form-checkbox-group v-model="form.checked" id="tags">
                <b-form-checkbox v-model="form.tags" value="React">React</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="Vue">Vue.js</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="Angular">Angular</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="JavaScript">JavaScript</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="Git">Git</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="HTML">HTML5</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="CSS">CSS3</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="Bootstrap">Bootstrap</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="SemanticUI">Semantic UI</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="API">API</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="Node">Node.js</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="Express">Express</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="Knex">Knex</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="PostgreSQL">PostgreSQL</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="MongoDB">MongoDB</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="Firebase">Firebase</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="Heroku">Heroku</b-form-checkbox>
                <b-form-checkbox v-model="form.tags" value="OOP">OOP</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group> -->
            <b-button class="filterbtn" type="submit" variant="success">Apply</b-button>
            <b-button @click="resetForm" class="filterbtn" type="reset" variant="danger">Reset</b-button>
          </b-form>
        </div>
      </div>
    </div>
    <div class="col-lg-9">
      <ul class="video-list list-unstyled">
        <b-media class="video shadow" tag="li" v-for="video in videos" :key="video._id">
          <img slot="aside" :src="thumbnail(video.url)" alt="placeholder" />
          <h4 class="mt-0 mb-1 title"><a :href="video.url">{{ video.title }}</a></h4>
          <!-- <h6 class="mt-0 mb-1">Category: {{ video.category }}</h6> -->
          <h6 class="mt-0 mb-1">Instructor: {{ video.instructor }}</h6>
          <p>{{ video.description }}</p>
          <ul class="tagslist">
            <li class="tag" v-for="tag in video.tags" v-bind:key="tag">{{ tag }}</li>
          </ul>
          <!-- <b-btn v-if="token" v-b-modal.modallg.modal-center variant="primary">Update</b-btn> -->
          <b-btn v-if="token" @click="onDelete(video)" variant="danger" v-bind="video">Delete</b-btn>
        </b-media>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>
import FormFilter from '@/components/FormFilter';
import router from '../router';

export default {
  name: 'Videos',
  components: {
    FormFilter
  },
  data() {
    return {
      token: false,
      videos: [],
      video: this.video,
      tags: [],
      apiURL: 'https://gvideos-api.herokuapp.com/api/videos',
      form: {
        category: null,
        instructor: null,
        tags: []
      },
      categories: [
        {
          text: 'Select One',
          value: null
        },
        'Front-End Design',
        'Front-End Development',
        'Front-End Frameworks',
        'Back-End (No Database)',
        'Back-End (With Database)',
        'Full-Stack',
        'Object Oriented Programming',
        'Workflow (Git)',
        'Other'
      ],
      instructors: [
        {
          text: 'Select One',
          value: null
        },
        'Marlena Baker',
        'Berto',
        'Patrick Biffle',
        'Kyle Coberly',
        'Chad Drummond',
        'Sean Helvey',
        'Nmuta Jones',
        'Dan Levy',
        'James Mann',
        'Brooks Patton',
        'CJ Reynolds',
        'Lizz Robbins',
        'Kim Schlesinger',
        'James Schultz',
        'Matt Winzer',
        'Other - Galvanize',
        'Other - Non-Galvanize'
      ],
      show: true
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
    filterCheck() {
      if (this.form.category === null && this.form.instructor === null) {
        this.baseSubmit();
      } else if (this.form.category !== null) {
        this.form.instructor = null;
        this.categorySubmit();
      } else if (this.form.instructor !== null) {
        this.form.category = null;
        this.instructorSubmit();
      }
    },
    baseSubmit() {
      fetch(this.apiURL)
        .then(response => response.json())
        .then(response => {
          this.videos = response.reverse();
          console.log('RESPONSE: ', response);
        });
    },
    categorySubmit() {
      fetch(this.apiURL + '/category/' + this.form.category)
        .then(response => response.json())
        .then(response => {
          this.videos = response.reverse();
          console.log('RESPONSE: ', response);
        });
    },
    instructorSubmit() {
      fetch(this.apiURL + '/instructor/' + this.form.instructor)
        .then(response => response.json())
        .then(response => {
          this.videos = response.reverse();
          console.log('RESPONSE: ', response);
        });
    },
    resetForm() {
      this.form.category = null;
      this.form.instructor = null;
      this.baseSubmit();
    },
    onDelete(video) {
      this.video = video;
      this.deleteURL = `https://gvideos-api.herokuapp.com/api/videos/${
        video._id
      }`;
      return fetch(this.deleteURL, {
        method: 'delete'
      })
        .then(resp => {
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
        })
        .then(json => {
          router.push({ path: '/login' });
        })
        .then(json => {
          router.push({ path: '/' });
        });
    },
    onUpdate(video) {
      this.video = video;
      this.updateURL = `https://gvideos-api.herokuapp.com/api/videos/${
        video._id
      }`;
      return fetch(this.updateURL, {
        method: 'put',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({ completed: !todo.completed })
      }).then(resp => {
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
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.category = null;
      this.form.instructor = null;
      this.form.tags = [];
      this.form.checked = [];
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
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
.title a {
  color: #f79020 !important;
}
.title a:hover {
  color: #222 !important;
  text-decoration: none;
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

.filterbtn:first-of-type {
  margin-left: 80px;
}

#filters {
  height: 83vh;
  padding-top: 50px;
  border-right: 2px solid black;
  padding-right: 10px;
  position: fixed;
  width: 23%;
}

.filtertitle {
  text-align: center;
  color: #f79020;
}
</style>
