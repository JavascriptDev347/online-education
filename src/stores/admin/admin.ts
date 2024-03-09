import { defineStore } from "pinia";
import { apiClient } from "@/modules";
import { IAdminPayloadGet } from '../../interfaces/api-client/admin/IAdminPayload';

export const useAdminStore = defineStore({
    id: "admin",
    state: () => {
        return {
            lists: <IAdminPayloadGet>{}
        }
    },
    actions: {
        async getAllStudents() {
            try {
                const res = await apiClient.admin.getAllStudents();
                this.lists = res
            } catch (error) {
                console.log("er", error);
            }
        }
    },
    getters: {

    }
})