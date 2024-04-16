import {IApiClient} from "@/interfaces";
import auth from "@/modules/api-client/auth/Auth"
import student from "@/modules/api-client/students/Student"
import admin from "@/modules/api-client/admin/Admin"
import director from "@/modules/api-client/director/Director";
import roles from "@/modules/api-client/roles/Roles"
import profile from "@/modules/api-client/profile/Profile"
import teacher from "./teacher/Teacher"

export const apiClient: IApiClient = {
    auth,
    student,
    admin,
    director,
    roles,
    profile,
    teacher
}