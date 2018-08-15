<template>
  <div class="container col-4 jumbotron upload">
    <h2 class="title">Upload Video</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="titleGroup"
                    label="Title"
                    label-for="title">
        <b-form-input id="title"
                      type="text"
                      v-model="form.title"
                      placeholder="Intro to PostgreSQL">
        </b-form-input>
      </b-form-group>
      <b-form-group id="urlGroup"
                    label="Video URL"
                    label-for="url">
        <b-form-input id="url"
                      type="text"
                      v-model="form.url"
                      placeholder="https://www.youtube.com/<URL>">
        </b-form-input>
      </b-form-group>
      <b-form-group id="descriptionGroup"
                    label="Description"
                    label-for="description">
        <b-form-textarea id="description"
                          v-model="form.description"
                          placeholder="Video summary"
                          :rows="3"
                          :max-rows="6">
        </b-form-textarea>
      </b-form-group>
      <b-form-group id="categories"
                    label="Category"
                    label-for="category">
        <b-form-select id="category"
                      :options="categories"
                      v-model="form.category">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Instructor"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="instructors"
                      v-model="form.instructor">
        </b-form-select>
      </b-form-group>
      <b-form-group id="tagGroup"
                    label="Tags"
                    label-for="tags">
        <b-form-checkbox-group v-model="form.checked" id="tags">
          <b-form-checkbox value="react">React</b-form-checkbox>
          <b-form-checkbox value="vue">Vue.js</b-form-checkbox>
          <b-form-checkbox value="angular">Angular</b-form-checkbox>
          <b-form-checkbox value="javascript">JavaScript</b-form-checkbox>
          <b-form-checkbox value="html">HTML5</b-form-checkbox>
          <b-form-checkbox value="css">CSS3</b-form-checkbox>
          <b-form-checkbox value="bootstrap">Bootstrap</b-form-checkbox>
          <b-form-checkbox value="semanticui">Semantic UI</b-form-checkbox>
          <b-form-checkbox value="api">API</b-form-checkbox>
          <b-form-checkbox value="node">Node.js</b-form-checkbox>
          <b-form-checkbox value="express">Express</b-form-checkbox>
          <b-form-checkbox value="knex">Knex</b-form-checkbox>
          <b-form-checkbox value="postgresql">PostgreSQL</b-form-checkbox>
          <b-form-checkbox value="mongodb">MongoDB</b-form-checkbox>
          <b-form-checkbox value="firebase">Firebase</b-form-checkbox>
          <b-form-checkbox value="heroku">Heroku</b-form-checkbox>
          <b-form-checkbox value="oop">OOP</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="success">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  data() {
    return {
      APIURL: 'https://gvideos-api.herokuapp.com/api/videos',
      form: {
        title: '',
        url: '',
        description: '',
        category: null,
        instructor: null,
        tags: [],
      },
      categories: [{
        text: 'Select One',
        value: null,
      },
        'Front-End Design',
        'Front-End Development',
        'Front-End Frameworks',
        'Back-End (No Database)',
        'Back-End (With Database)',
        'Full-Stack',
        'Object Oriented Programming',
        'Other',
      ],
      instructors: [{
        text: 'Select One',
        value: null,
      },
        'Nmuta Jones',
        'Dan Levy',
        'Sean Helvey',
        'Matt Winzer',
        'Other - Galvanize',
        'Other - Non-Galvanize',
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      return fetch(this.APIURL, {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(this.form),
      }).then((resp) => {
        if (!resp.ok) {
          if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then((data) => {
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
      /* Reset our form values */
      this.form.title = '';
      this.form.videourl = '';
      this.form.description = '';
      this.form.category = null;
      this.form.instructor = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true; });
    },
  },
};
</script>

<style scoped>
.upload {
  margin-bottom: 100px;
}
.jumbotron {
  background-color: #fff !important;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>

