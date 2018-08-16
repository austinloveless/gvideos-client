<template>
  <div id='filters' class="filters">
    <div>
      <b-form @submit.prevent="onSubmit">
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
        <b-form-group id="instructors"
                      label="Instructor"
                      label-for="instructor">
          <b-form-select id="instructor"
                        :options="instructors"
                        v-model="form.instructor">
          </b-form-select>
        </b-form-group>
        <b-form-group id="tagGroup"
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
        </b-form-group>
        <b-button type="submit" variant="success">Apply</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'filters',
  data() {
    return {
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
  methods: {
    onSubmit() {
      console.log('Category selected: ', this.form.category);
      fetch(this.apiURL + '/category/' + this.form.category)
        .then(response => response.json())
        .then(response => {
          this.videos = response.reverse();
          console.log('RESPONSE: ', response);
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
.filters {
  margin-top: 2%;
  position: fixed;
  width: 22%;
}
.custom-control-inline {
  margin-right: 0.5rem;
  width: 30%;
}
</style>
