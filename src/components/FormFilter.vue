<template>
  <div id='filters' class="filters">
    <div>
      <b-form>
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
        <b-form-group id="exampleGroup4"
                      label="Tags"
                      label-for="exampleChecks">
          <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
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
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
