<template>
  <div id='filters' class="filters">
    <div>
      <b-form>
        <b-form-group id="categories"
                    label="Category"
                    label-for="category">
          <b-form-select id="category"
                        :options="categories"
                        v-model="form.category">
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
      form: {
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
      // alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.category = null;
      this.form.instructor = null;
      this.form.tags = [];
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
    },
  },
};
</script>

<style scoped>
.filters {
  margin-top: 2%;
  position: fixed;
  width: 22%;
}
.custom-control-inline {
  margin-right: .5rem;
  width: 30%;
}
</style>
