<template>
  <div id='filters' class="filters">
    <div>
      <b-form>
        <b-form-group id="exampleGroup4">
          <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
            <b-form-checkbox value="me">Check me out</b-form-checkbox>
            <b-form-checkbox value="that">Check that out</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
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
        checked: [],
      },
      show: true,
    };
  },
};
</script>

<style scoped>
.filters {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
