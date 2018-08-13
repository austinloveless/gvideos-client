<template>

</template>

<script>
export default {
  data() {
    return {
      videos: [],
      apiURL: 'https://gvideos-api.herokuapp.com/api/videos',
    };
  },
  mounted() {
    fetch(this.apiURL)
      .then(response => response.json())
      .then(response => {
        this.videos = response;
        console.log(response);
      })
  },
}
</script>

<style scoped>

</style>

