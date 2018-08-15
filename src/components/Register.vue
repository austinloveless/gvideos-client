<template>
  <div class="container col-3 jumbotron auth">
    <h2 class="title">Register</h2>
    <b-form @submit="onSubmit">
      <b-form-group id="usernameGroup"
                    label="Username"
                    label-for="username">
        <b-form-input id="username"
                      type="text"
                      v-model="form.username"
                      placeholder="PICK A USERNAME"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="passwordGroup"
                    label="Password"
                    label-for="password">
        <b-form-input id="password"
                      type="password"
                      v-model="form.password"
                      placeholder="MAKE IT A GOOD ONE"
                      required>
        </b-form-input>
      </b-form-group>
      <div class="text-center">
        <b-button class="btn-success" type="submit" name="submit" value="submit" variant="primary">Register</b-button>
    </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      registerURL: 'https://gvideos-api.herokuapp.com/auth/register',
      form: {
        username: '',
        password: ''
      },
      show: true
      // users: [],
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      return fetch(this.registerURL, {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(this.form)
      }).then(resp => {
        console.log(resp);
        if (!resp.ok) {
          if (resp.status >= 400 || resp.status < 500) {
            return resp.json().then(data => {
              const err = { errorMessage: data.message };
              throw err;
            });
          } else if (resp.status === 200) {
            localStorage.setItem('Balls');
          }
          const err = { errorMessage: 'Blah' };
          throw err;
        }
        return resp.json();
      })
      .then((json)=>{
        localStorage.setItem('token', json.token)
      })
    },
  },

};
</script>

<style scoped>
.auth {
  margin-top: 60px;
  /* margin-bottom: 100px; */
}
.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
