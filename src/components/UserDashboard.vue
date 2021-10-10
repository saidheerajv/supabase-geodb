<template>
  <div class="row justify-content-md-center">
    <div class="col-sm-6 px-3 border-end">
      <GetUserListings />
    </div>
    <div class="col-sm-6 px-5">
      <PostLocation />
    </div>
  </div>
</template>

<script>
import PostLocation from "./PostLocation.vue";
import GetUserListings from "./GetUserListings.vue";
// import { store } from "../store";
// import router from "../router/router";

export default {
  name: "UserDashboard",
  components: {
    PostLocation,
    GetUserListings,
  }
  // created() {
  //   if (!store.user) {
  //     router.push("/");
  //   } else {

  //   }
  // },
};
</script>

<style>
</style>
