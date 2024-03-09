import { defineStore } from "pinia";
import { apiClient } from "@/modules";
export const useStudentStore = defineStore({
    id: "student",
    state: () => ({

    }),
    actions: {
        async getAllStudents(q: string) {
            try {
                const res = await apiClient.student.getAllStudents(q)
                console.log("res", res);
            } catch (error) {
                console.log("er", error);

            }
        }
    },
    getters: {

    }
})