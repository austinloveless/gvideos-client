<template>
  <div class="container col-3 jumbotron auth">
    <h2 class="title">Login</h2>
    <b-form @submit.prevent="submitForm" :addUser="this.addUser">
      <b-form-group id="exampleInputGroup2"
                    label="Username"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="user.username"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Password"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text"
                      v-model="user.password"
                      required>
        </b-form-input>
      </b-form-group>
      <div class="text-center">
        <b-button class="btn-success" type="submit" name="submit" value="submit" variant="primary">Sign Up</b-button>
    </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    addUser: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      users: [],
      registerURL: 'https://gvideos-api.herokuapp.com/register',
    };
  },
  mounted() {
    fetch(this.registerURL)
      .then(response => response.json())
      .then((response) => {
        this.users = response;
      });
  },
  methods: {
    submitForm() {
      this.addUser(this.user);
      this.user = {
        username: '',
        password: '',
      };
    },
  },
};
</script>

<style scoped>
.auth {
  margin-top: 100px;
  margin-bottom: 100px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
