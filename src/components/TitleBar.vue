<template>
  <div class="title">
    <h1 class="mx-2">Supabase GeoDB</h1>
  </div>
</template>

<script>
export default {
  name: "TitleBar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  background-color: rgb(36, 180, 126);
  color: #eafbf5;
  padding: 0.8rem 0.6rem;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
}
</style>
