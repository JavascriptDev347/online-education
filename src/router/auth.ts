import AuthLayout from "../layout/AuthLayout.vue";
import Login from "@/pages/auth/index.vue"
export default {
    path: "/",
    name: "auth",
    component: AuthLayout,
    redirect: "/login",
    children: [
        {
            path: "/login",
            name: "login",
            component: Login
        }
    ]
}