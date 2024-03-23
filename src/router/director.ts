import MainLayout from "@/layout/MainLayout.vue";
import Director from "@/pages/director/index.vue";
import Staff from "@/pages/director/staff/index.vue";
import Roles from "@/pages/director/roles/index.vue"

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
        },
        {
            path: "/staff",
            name: "Staff",
            component: Staff
        },
        {
            path: "/roles",
            name: "Roles",
            component: Roles
        }
    ]
}