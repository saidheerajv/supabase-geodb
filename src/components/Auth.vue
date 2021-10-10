<template>
  <form
    class="d-flex justify-content-center mt-5 mx-3"
    @submit.prevent="handleLogin"
  >
    <div class="mt-4">
      <h3 class="header text-dark">Sign in to Add/Manage your listing</h3>
      <p class="description text-secondary">
        Sign in via magic link with your email below
      </p>
      <p class="alert alert-success" v-if="emailSent">
        Magic link sent to your email successfully! <br />
        Please check your email to login
      </p>
      <div>
        <input
          class="form-control my-2"
          type="email"
          placeholder="Your email"
          v-model="email"
        />
      </div>
      <div>
        <input
          type="submit"
          class="btn action-btn float-end my-2"
          :value="loading ? 'Loading' : 'Send Magic link'"
          :disabled="loading"
        />
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { supabase } from "../supabase";

export default {
  data() {
    return {};
  },
  setup() {
    const loading = ref(false);
    const email = ref("");
    const emailSent = ref(false);

    const handleLogin = async () => {
      try {
        loading.value = true;
        emailSent.value = false;
        const { error } = await supabase.auth.signIn({ email: email.value });
        if (error) throw error;
        emailSent.value = true;
      } catch (error) {
        alert(error.error_description || error.message);
      } finally {
        loading.value = false;
      }
    };

    return {
      loading,
      email,
      handleLogin,
      emailSent,
    };
  },
};
</script>

<style scoped>
.action-btn {
  background-color: rgb(36, 180, 126);
  color: #fff;
}
</style>