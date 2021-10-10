<template>
  <div class="my-1">
    <h3 class="text-dark mb-3">Your Listings</h3>
    <div v-if="items.length > 0">
      <div v-for="item in items" :key="item.id">
        <ListingCard :loc="item" :showDeleteBtn="true" :showActionBtn="false"/>
      </div>
    </div>

    <div v-else>
      <div class="alert alert-warning text-center" role="alert">
        <h5>You don't have any listings yet!</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from "../supabase";
import ListingCard from "./ListingCard.vue";
import { store } from "../store";

export default {
  name: "GetUserListings",
  components: {
    ListingCard,
  },
   created() {

    this.getUserListings(store.user.id);
  },
  data() {
    return {
      navigatorError: false,
      coords: {},
      items: [],
      radii: 20,
    };
  },

  methods: {
    async getUserListings(userId) {
      
      const { data: listings, error } = await supabase
        .from("all_locations")
        .select()
        .eq('added_by',userId);

      if (error) {
        console.log("error", error);
        return;
      }
  console.log(listings);
      // handle for when no todos are returned
      if (listings === null) {
        listings.value = [];
        return;
      }

      this.items = listings;
    },
  },
};
</script>

<style scoped>
</style>
