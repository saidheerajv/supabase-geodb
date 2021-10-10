<template>
  <div class="row justify-content-center bg-white">
    <div class="col-12 px-5">
      <GetLocations />
    </div>
  
  </div>
</template>

<script>
import GetLocations from "./GetLocations.vue";

export default {
  name: "Home",
  components: {
    GetLocations
  },
};
</script>

<style>

</style>
