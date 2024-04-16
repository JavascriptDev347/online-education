import {createRouter, createWebHistory} from "vue-router";
import auth from "./auth";
import director from "./director";
import admin from "./admin"
import profile from "./profile"
import teacher from "./teacher"
import PageNotFound from "@/pages/404.vue";

const router = createRouter({
    routes: [auth, director, admin, profile, teacher, {
        path: '/:pathMatch(.*)*', name: "404",
        component: PageNotFound
    }],
    history: createWebHistory()
})

export default router;