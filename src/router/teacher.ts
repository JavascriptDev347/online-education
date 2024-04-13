import MainLayout from "@/layout/MainLayout.vue";
import Teacher from "@/pages/teacher/index.vue"

export default {
    path: "/",
    name: "teacher",
    component: MainLayout,
    redirect: "/mycourses",
    children: [
        {
            path: "/mycourses",
            name: "courses",
            component: Teacher
        }
    ]
}