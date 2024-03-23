import MainLayout from '@/layout/MainLayout.vue';
import admin from "@/pages/admin/index.vue";
import adminStudents from "@/pages/admin/students/index.vue"
import adminTeachers from "@/pages/admin/teacher/index.vue";
import adminCourses from "@/pages/admin/course/index.vue";
import adminRooms from "@/pages/admin/rooms/index.vue";
import adminGroups from "@/pages/admin/groups/index.vue";
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
        },
        {
            path: "/teachers",
            name: "Teachers",
            component: adminTeachers
        },
        {
            path: "/courses",
            name: "Courses",
            component: adminCourses
        },
        {
            path: "/rooms",
            name: "Rooms",
            component: adminRooms
        },
        {
            path: "/groups",
            name: "Groups",
            component: adminGroups
        }
    ]
}