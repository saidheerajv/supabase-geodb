<template>
  <p class="alert alert-success" v-if="successAlert">
    Added Listing successfully !
  </p>
  <p class="alert alert-warning" v-if="errorAlert">
    Error Adding Listing ! Please try again.
  </p>
  <div class="">
    <h3 class="text-dark mb-3">Post Listing</h3>

    <input class="form-control my-3" v-model="name" placeholder="Enter name" />

    <input
      class="form-control my-3"
      v-model="loc_string"
      placeholder="Paste google maps url"
    />

    <textarea
      class="form-control my-3"
      v-model="description"
      placeholder="Description"
      rows="5"
    >
    </textarea>

    <div class="text-end">
      <button class="btn action-btn m-2 float-right" @click="postListing">
        Add Listing
      </button>
    </div>
  </div>
</template>

<script>
import { supabase } from "../supabase";
import { store } from "../store";

export default {
  name: "PostLocation",
  data() {
    return {
      name: "",
      loc_string: "",
      description: "",
      successAlert: false,
      errorAlert: false,
    };
  },
  methods: {
    async postListing() {
      let coords = this.getLatLong(this.loc_string);
      let d = new Date();

      let inserObj = {
        name: this.name,
        location: "SRID=4326;POINT(" + coords.lat + " " + coords.long + ")",
        description: this.description,
        tags: "xyz abc",
        coords: JSON.stringify(coords),
        created_at: d,
        updated_at: d,
        added_by: store.user.id,
      };

      // console.log(data);
      this.successAlert = false;

      const { error } = await supabase
        .from("all_locations")
        .insert([inserObj])
        .single();

      // console.log(data, error);
      if (error) {
        this.errorAlert = true;
      } else {
        this.successAlert = true;
      }
    },

    getLatLong(str) {
      var patt1 = /[+-]?\d+(\.\d+)?/g;
      var result = str.match(patt1);
      result = result.filter((item) => {
        return item.length > 4 && item.includes(".");
      });

      return { lat: result[0], long: result[1] };
    },
  },
};
</script>


<style scoped>
.action-btn {
  background-color: rgb(36, 180, 126);
  color: #fff;
}
</style>
