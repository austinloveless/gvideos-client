<template>
  <div id='videos'></div>
</template>

<script>
export default {
  name: 'videos',
  data() {
    return {
      videos: [],
      apiURL: 'https://gvideos-api.herokuapp.com/api/videos',
    };
  },
  mounted() {
    fetch(this.apiURL)
      .then(response => response.json())
      .then(response => ({
        videos: response,
      }));
  },
};
</script>

<style scoped>

</style>

