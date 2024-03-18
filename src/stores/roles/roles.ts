import { defineStore } from "pinia";
import { IRole } from '@/interfaces';
import { apiClient } from "@/modules";

export const useRolesStore = defineStore({
    id: "roles",
    state: () => ({
        roles: [] as IRole[]
    }),
    actions: {
        async getAllRole() {
            try {
                const res = await apiClient.roles.getAllRoles();
                this.roles = res.roles
                console.log("r", res)
                console.log("2", this.roles)
            } catch (error) {
                console.log("errrrr", error)
            }
        }
    },
    getters: {

    }
})