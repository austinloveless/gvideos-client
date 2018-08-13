<template>
  <div class="container col-3 jumbotron auth">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Username:"
                    label-for="exampleInput2">

        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>

      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Password:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="form.password"
                      required
                      placeholder="Enter password">
        </b-form-input>

      </b-form-group>

      <div class="text-center">
        <b-form-group id="exampleGroup4">
          <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
            <b-form-checkbox value="forget">Forget me</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button class="btn-success" type="submit" variant="primary">Log in</b-button>
    </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data() {
    return {
      form: {
        username: '',
        password: '',
        food: null,
        checked: [],
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots',
        'Beans',
        'Tomatoes',
        'Corn',
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
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
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

  .auth {
    margin-top: 10%;
  }

</style>

<!-- b-form-1.vue -->
