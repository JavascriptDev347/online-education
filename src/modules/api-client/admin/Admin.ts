import { IAdminApiClientUrls } from "@/interfaces";
import { AdminApiClient } from "./AdminApiClient";

const urls: IAdminApiClientUrls = {
    getAllStudents: "/admin/get-students/{q}",
    deleteStudent: "",
    createStudent: "",
    getStudent: "",
    updateStudent: "/admin/add-student"
}

const adminApiClient = new AdminApiClient(urls)
export default adminApiClient;