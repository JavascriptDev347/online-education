import {IAdminApiClientUrls} from "@/interfaces";
import {AdminApiClient} from "./AdminApiClient";

const urls: IAdminApiClientUrls = {
    getAllStudents: "/admin/get-students/{q}",
    getStudentById: "/admin/get-student",
    createStudent: "/admin/add-student",
    editStudent: "/admin/update-student",
    deleteStudent: "/admin/delete-student",

    getAllTeachers: "/admin/get-teachers/{q}",

    getAllCourses: "/courses/all/{q}",
    createCourse: "/courses/create-course",
    editCourse: "/courses/update",
    deleteCourse: "/courses/delete",

    getAllRooms: "/rooms/all/{q}",

    getAllGroups: "/groups/all/{q}",
    addGroupStudent:"/groups/add-student"

}

const adminApiClient = new AdminApiClient(urls)
export default adminApiClient;