import { defineStore } from "pinia";
import { apiClient } from "@/modules";

export const useDirectorStore = defineStore({
    id: "director",
    state: () => {
        return {
            staffs: <any>[]
        }
    },
    actions: {
        async getAllStaffs() {
            try {
                const res = await apiClient.director.getAllStaffs()
                this.staffs = res
            } catch (error) {
                console.log("er", error);
            }
        }
    },
    getters: {

    }
})