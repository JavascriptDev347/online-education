import {defineStore} from "pinia";
import {ITeacherGroupsPayload} from "@/interfaces";
import {apiClient} from "@/modules";

interface IState {
    groups: ITeacherGroupsPayload[]
}

export const useTeacherStore = defineStore("teacher", {
    state: (): IState => {
        return {
            groups: []
        }
    },
    getters: {},
    actions: {
        async getTeacherGroups() {
            const user = JSON.parse(localStorage.getItem("user"))
            this.groups = await apiClient.teacher.getTeacherCourses(user._id)
        }
    }
})