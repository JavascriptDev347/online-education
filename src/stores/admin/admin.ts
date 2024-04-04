import {defineStore} from "pinia";
import {apiClient} from "@/modules";
import {IAdminPayloadGet, IAdminRequestPost} from '@/interfaces';
import {message} from 'ant-design-vue';

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
            this.lists = await apiClient.admin.getAllStudents()
        },
        async getAllTeachers() {
            this.teachers = await apiClient.admin.getAllTeachers()
        },
        async getAllCourses() {
            this.courses = await apiClient.admin.getAllCourses()
        },
        async getAllRooms() {
            this.rooms = await apiClient.admin.getAllRooms()
        },
        async getAllGroups() {
            this.groups = await apiClient.admin.getAllGroups()
        },

        //post
        async createStudent(payload: IAdminRequestPost) {
            const res = await apiClient.admin.createStudents(payload)
            await message.success(res.message)
            await this.getAllStudents()
        },

        //edit
        async editStudent(id: string, payload: IAdminRequestPost) {
            await apiClient.admin.editStudent(id, payload)
            await message.success("Muvaffaqiyatli o'zgartirildi")
            await this.getAllStudents()
        },

        //delete
        async deleteStudent(id) {
            await apiClient.admin.deleteStudent(id)
            await message.success("Ma'lumot o'chirildi")
            await this.getAllStudents()
        }
    },
    getters: {}
})