import MainLayout from '@/layout/MainLayout.vue';
import admin from "@/pages/admin/index.vue";
import adminStudents from "@/pages/admin/students/index.vue"

export default {
    path: "/",
    name: "admin",
    redirect: "/dashboard",
    component: MainLayout,
    children: [
        {
            path: "/dashboard",
            name: "Admin dashboard",
            component: admin
        },
        {
            path: "/students",
            name: "Students",
            component: adminStudents
        }
    ]
}