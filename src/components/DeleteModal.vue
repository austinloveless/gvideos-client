<template>
  <div>
    <b-modal id="modal1" title="Delete Video" props="cancel-disabled">
      <p class="my-4">Are you sure you wish to delete this video?</p>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      props: {
        'cancel-disabled': true
      }
    };
  }
};
</script>
