<template>
  <div class="card w-100 my-2">
    <div class="card-body">
      <h5 class="card-title">{{ loc.name }}</h5>

      <p class="card-text">
        {{ loc.description }}
      </p>

      <p class="text-end">
        <a
          v-if="showActionBtn"
          v-bind:href="
            'https://www.google.com/maps/place/' +
            loc.coords.lat +
            ',' +
            loc.coords.long
          "
          target="_blank"
          class="btn directions-btn text-white mx-2"
        >
          Open in maps
        </a>

        <button
          class="btn btn-danger mx-2"
          v-if="showDeleteBtn"
          @click="deleteListing(loc.id)"
        >
          Delete Listing
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { supabase } from "../supabase";
import { store } from "../store";

export default {
  name: "ListingCard",
  props: {
    loc: Object,
    showDeleteBtn: Boolean,
    showActionBtn: Boolean,
  },
  methods: {
    async deleteListing(id) {
      console.log(id);
      const { error } = await supabase
        .from("all_locations")
        .delete()
        .match({ id: id });

      // console.log(data, error);
      if (!error) {
         this.$parent.getUserListings(store.user.id);
      }
    },
  },
};
</script>

<style scoped>
.directions-btn {
  background-color: rgb(36, 180, 126);
}
</style>
