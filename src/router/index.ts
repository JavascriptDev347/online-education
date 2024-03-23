import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth";
import director from "./director";
import admin from "./admin"
import profile from "./profile"
const router = createRouter({
    routes: [auth, director, admin, profile],
    history: createWebHistory()
})

export default router;