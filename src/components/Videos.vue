<template>

</template>

<script>
export default {
  data () {
    return {
      videos: [],
      apiURL: ''
    }
  },
  mounted () {
    fetch(this.apiURL)
      .then(response => response.json())
      .then(response => {
        this.videos = response
      })
  },
}
</script>

<style scoped>

</style>

