import { defineStore } from "pinia";
import { apiClient } from "@/modules";
import { IAdminPayloadGet } from '../../interfaces/api-client/admin/IAdminPayload';

export const useAdminStore = defineStore({
    id: "admin",
    state: () => {
        return {
            lists: <IAdminPayloadGet>{},
            teachers: <any>[],
            courses: <any>[],
            rooms: <any>[],
            groups: <any>[]
        }
    },
    actions: {
        //get
        async getAllStudents() {
            try {
                const res = await apiClient.admin.getAllStudents();
                this.lists = res
            } catch (error) {
                console.log("er", error);
            }
        },
        async getAllTeachers() {
            try {
                const res = await apiClient.admin.getAllTeachers();
                this.teachers = res
            } catch (error) {
                console.log("er", error);
            }
        },
        async getAllCourses() {
            try {
                const res = await apiClient.admin.getAllCourses()
                this.courses = res
            } catch (error) {
                console.log("er", error);

            }
        },
        async getAllRooms() {
            const res = await apiClient.admin.getAllRooms();
            this.rooms = res
        },
        async getAllGroups() {
            const res = await apiClient.admin.getAllGroups()
            this.groups = res
        }
    },
    getters: {

    }
})