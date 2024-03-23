import MainLayout from "@/layout/MainLayout.vue";
import Profile from "@/pages/profile/index.vue";

export default {
    path: "/",
    name: "Profile Layout",
    component: MainLayout,
    children: [
        {
            path: "/profile",
            name: "Profile",
            component: Profile
        }
    ]
}