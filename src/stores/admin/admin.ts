import {defineStore} from "pinia";
import {apiClient, HttpClient} from "@/modules";
import {IAddGroupStudent, IAddGroupTeacher, IAdminPayloadGet, IAdminRequestPost, ICreateCourse} from '@/interfaces';
import {message} from 'ant-design-vue';
import {useCrud} from "@/stores/crud";

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
            this.lists = await apiClient.admin.getAllStudents();
        },
        async getAllTeachers() {
            console.log(await apiClient.admin.getAllTeachers())
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
        async createCourse(payload: ICreateCourse) {
            await apiClient.admin.createCourse(payload)
            await message.success("Yangi kurs qo'shildi")
            await this.getAllCourses()
        },

        async addGroupStudent(payload: IAddGroupStudent) {
            await apiClient.admin.addGroupStudent(payload);
            await message.success("Yangi student guruhga qo'shildi")
            await this.getAllGroups();
        },
        async addGroupTeacher(payload: IAddGroupTeacher) {
            await apiClient.admin.addGroupTeacher(payload)
            await message.success("Teacher biriktirildi");
            await this.getAllGroups();

        },

        //edit
        async editStudent(id: string, payload: IAdminRequestPost) {
            await apiClient.admin.editStudent(id, payload)
            await message.success("Muvaffaqiyatli o'zgartirildi")
            await this.getAllStudents()
        },
        async editCourse(payload: ICreateCourse) {
            await apiClient.admin.editCourse(payload);
            await message.success("Muvaffaqiyatli o'zgartirildi")
            await this.getAllCourses()
        },

        //delete
        async deleteStudent(id: string) {
            await apiClient.admin.deleteStudent(id)
            await message.success("Ma'lumot o'chirildi")
            await this.getAllStudents()
        },
        async deleteCourse(id: string) {
            const res = await apiClient.admin.deleteCourse(id);
            message.success(res.message);
            await this.getAllCourses();

        }
    },
    getters: {}
})