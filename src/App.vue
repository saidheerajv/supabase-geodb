<template>
  <TitleBar />
  <div class="container mt-3 bg-white rounded h-75 overflow-auto pt-4">
    
    <div v-if="!showLogin">
      <UserDashboard v-if="store.user" />
      <Home v-else />
    </div>
    <Auth v-else />
  </div>

  <p class="text-center border-bottom mt-2">
      <button
        class="btn btn-secondary m-2 float-right"
        v-if="!store.user && !showLogin"
        @click="showLoginFunc"
      >
        Login to Add/Manage listing
      </button>
      <button
        class="btn btn-danger m-2 float-right"
        v-if="store.user"
        @click="signOut"
      >
        Sign out
      </button>
            <button
        class="btn btn-secondary m-2 float-right"
        v-if="showLogin"
        @click="showLogin = !showLogin"
      >
        Home
      </button>
    </p>

</template>

<script>
import TitleBar from "./components/TitleBar.vue";
import { store } from "./store";
import { supabase } from "./supabase";
import UserDashboard from "./components/UserDashboard.vue";
import Home from "./components/Home.vue";
import Auth from "./components/Auth.vue";
export default {
  name: "App",
  data() {
    return {
      showLogin: false,
    };
  },
  components: {
    TitleBar,
    Home,
    UserDashboard,
    Auth,
  },
  setup() {
    
     store.user = null;
    supabase.auth.onAuthStateChange((_, session) => {
      if (session && session.user) {
        store.user = session.user;
      } else {
        store.user = null;
      }
    });

    return {
      store,
    };
  },
  methods: {
    showLoginFunc() {
      this.showLogin = true;
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
      if (!error) {
        console.log("Logged out successfully!");
      }
    },
  },
};
</script>

<style>

.action-btn {
  background-color: rgb(36, 180, 126);
  color : #fff;
}

@font-face {
  font-family: "SourceSansPro Regular";
  src: url('./assets/fonts/SourceSansPro-Regular.ttf');
}

#app {
  font-family: SourceSansPro Regular;
  height: 100%;
  background-color: #d9d9d9;
}


</style>
