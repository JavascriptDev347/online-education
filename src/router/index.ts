import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth";
import director from "./director";
import admin from "./admin"
const router = createRouter({
    routes: [auth, director, admin],
    history: createWebHistory()
})

export default router;