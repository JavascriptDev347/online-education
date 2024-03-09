import MainLayout from "@/layout/MainLayout.vue";
import Director from "@/pages/director/index.vue";
export default {
    path: "/",
    name: "director",
    component: MainLayout,
    redirect: "/dashboard",
    children: [
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Director
        }
    ]
}