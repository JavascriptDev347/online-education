import {createRouter, createWebHistory} from "vue-router";
import auth from "./auth";
import director from "./director";
import admin from "./admin"
import profile from "./profile"
import teacher from "./teacher"

const router = createRouter({
    routes: [auth, director, admin, profile, teacher],
    history: createWebHistory()
})

export default router;