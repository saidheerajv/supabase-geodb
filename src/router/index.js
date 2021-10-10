import { VueRouter } from 'vue-router'
import Home from "../components/Home.vue";
import Auth from "../components/Auth.vue";
import UserDashboard from "../components/UserDashboard.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Auth
    },
    {
        path: "/dashboard",
        name: "UserDashboard",
        component: UserDashboard
    }
];

// const router = createRouter({
//     history: createWebHashHistory(),
//     routes : routes
//   })

const router = new VueRouter({
  routes // short for `routes: routes`
})

export default router;