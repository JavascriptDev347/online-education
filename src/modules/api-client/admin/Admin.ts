import { IAdminApiClientUrls } from "@/interfaces";
import { AdminApiClient } from "./AdminApiClient";

const urls: IAdminApiClientUrls = {
    getAllStudents: "/admin/get-students/{q}",
    deleteStudent: "/admin/delete-student",
    createStudent: "/admin/add-student",
    updateStudent: "/admin/add-student",
    getAllTeachers: "/admin/get-teachers/{q}",
    getAllCourses: "/courses/all/{q}",
    getAllRooms: "/rooms/all/{q}",
    getAllGroups: "/groups/all/{q}",
    editStudent:"/admin/update-student",
    getStudentById:"/"
}

const adminApiClient = new AdminApiClient(urls)
export default adminApiClient;