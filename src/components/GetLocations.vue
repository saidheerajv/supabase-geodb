<template>
  <div class="my-1">
    <p>You're at : {{ coords.latitude }}, {{ coords.longitude }}</p>
    <!-- <input type="text" class="form-control my-3" placeholder="Search" /> -->
    <label class="float-end"> looking in {{ radii }} KMs radius </label>
    <input
      type="range"
      class="form-range"
      min="2"
      max="102"
      step="10"
      id="kmsRange"
      v-model="radii"
      @change="radiusChange"
    />

    <div v-if="items.length > 0">
      <h4 class="text-secondary mb-3">Found following things around you</h4>
      <div v-for="item in items" :key="item.id">
        <ListingCard :loc="item" :showDeleteBtn="false" :showActionBtn="true" />
      </div>
    </div>

    <div v-else>
      <div class="alert alert-warning text-center" role="alert">
        <h5>Sorry ! No listings found aroud you.</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { supabase } from "../supabase";
import ListingCard from "./ListingCard.vue";

export default {
  name: "GetUserListings",
  components: {
    ListingCard,
  },
  data() {
    return {
      navigatorError: false,
      coords: {},
      items: [],
      radii: 20,
    };
  },
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  },

  methods: {
    radiusChange() {
      console.log(this.radii);
      this.getLocations(this.coords, this.radii);
    },
    showPosition(position) {
      this.coords = position.coords;
      this.getLocations(this.coords, 100);
    },
    async getLocations(position, radius = 100) {
      const { data: listings, error } = await supabase.rpc("get_listings", {
        radius: radius,
        point:
          "SRID=4326;POINT(" +
          position.latitude +
          " " +
          position.longitude +
          ")",
      });

      if (error) {
        console.log("error", error);
        return;
      }

      if (listings === null) {
        listings.value = [];
        return;
      }

      this.items = listings;
      this.items.forEach((item) => {
        item.coords = JSON.parse(item.coords);
      });
    },
  },
};
</script>

<style scoped>
</style>
