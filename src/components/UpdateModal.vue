<template>
  <div>
    <b-modal id="modallg" size="lg" title="Update Video">
      <b-form @submit="onSubmit">
        <b-form-group id="titleGroup"
                      label="Title"
                      label-for="title">
          <b-form-input id="title"
                        type="text"
                        v-model="form.title"
                        required
                        placeholder="Intro to PostgreSQL">
          </b-form-input>
        </b-form-group>
        <b-form-group id="urlGroup"
                      label="Video URL"
                      label-for="url">
          <b-form-input id="url"
                        type="text"
                        v-model="form.url"
                        required
                        placeholder="https://www.youtube.com/<URL>">
          </b-form-input>
        </b-form-group>
        <b-form-group id="descriptionGroup"
                      label="Description"
                      label-for="description">
          <b-form-textarea id="description"
                            v-model="form.description"
                            placeholder="Video summary"
                            required
                            :rows="3"
                            :max-rows="6">
          </b-form-textarea>
        </b-form-group>
        <b-form-group id="categories"
                      label="Category"
                      label-for="category">
          <b-form-select id="category"
                        :options="categories"
                        required
                        v-model="form.category">
          </b-form-select>
        </b-form-group>
        <b-form-group id="exampleInputGroup3"
                      label="Instructor"
                      label-for="exampleInput3">
          <b-form-select id="exampleInput3"
                        :options="instructors"
                        required
                        v-model="form.instructor">
          </b-form-select>
        </b-form-group>
        <b-form-group id="tagGroup"
                      label="Tags"
                      label-for="tags">
          <b-form-checkbox-group v-model="form.checked" id="tags" required>
            <b-form-checkbox value="React">React</b-form-checkbox>
            <b-form-checkbox value="Vue">Vue.js</b-form-checkbox>
            <b-form-checkbox value="Angular">Angular</b-form-checkbox>
            <b-form-checkbox value="JavaScript">JavaScript</b-form-checkbox>
            <b-form-checkbox value="Git">Git</b-form-checkbox>
            <b-form-checkbox value="HTML">HTML5</b-form-checkbox>
            <b-form-checkbox value="CSS">CSS3</b-form-checkbox>
            <b-form-checkbox value="Bootstrap">Bootstrap</b-form-checkbox>
            <b-form-checkbox value="SemanticUI">Semantic UI</b-form-checkbox>
            <b-form-checkbox value="API">API</b-form-checkbox>
            <b-form-checkbox value="Node">Node.js</b-form-checkbox>
            <b-form-checkbox value="Express">Express</b-form-checkbox>
            <b-form-checkbox value="Knex">Knex</b-form-checkbox>
            <b-form-checkbox value="PostgreSQL">PostgreSQL</b-form-checkbox>
            <b-form-checkbox value="MongoDB">MongoDB</b-form-checkbox>
            <b-form-checkbox value="Firebase">Firebase</b-form-checkbox>
            <b-form-checkbox value="Heroku">Heroku</b-form-checkbox>
            <b-form-checkbox value="OOP">OOP</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button type="submit" variant="success">Submit</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Update',
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
        'Workflow (Git)',
        'Other',
      ],
      instructors: [{
        text: 'Select One',
        value: null,
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
        'Other - Non-Galvanize',
      ],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      return fetch(this.APIURL, {
        method: 'put',
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
  },
};
</script>
