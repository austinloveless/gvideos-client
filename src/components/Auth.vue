<template>
  <div class="container col-3 jumbotron auth">
    <h2 class="title">Login</h2>
    <b-form @submit="onSubmit">
      <b-form-group id="exampleInputGroup2"
                    label="Username:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.username"
                      required
                      placeholder="PUT YOUR USERNAME HERE">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Password:"
                    label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="DON'T ENTER THE WRONG ONE">
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
      loginURL: 'https://gvideos-api.herokuapp.com/auth/login',
      form: {
        username: '',
        password: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      return fetch(this.loginURL, {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(this.form),
      }).then((resp) => {
        console.log(resp);
        if (!resp.ok) {
          if (resp.status >= 400 || resp.status < 500) {
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

<style scoped>
.card-body {
  padding: 0px;
}
.title {
  text-align: center;
  margin-bottom: 20px;
}

.auth {
  margin-top: 60px;
}
</style>
