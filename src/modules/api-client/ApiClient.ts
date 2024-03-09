import { IApiClient } from "@/interfaces";
import auth from "@/modules/api-client/auth/Auth"
import student from "@/modules/api-client/students/Student"
import admin from "@/modules/api-client/admin/Admin"
export const apiClient: IApiClient = {
    auth,
    student,
    admin
}