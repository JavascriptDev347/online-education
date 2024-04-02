import {defineStore} from "pinia";
import {apiClient} from "@/modules";
import {IUser} from "@/interfaces";


export const useDefault = defineStore({
    id: "profile",
    state: () => ({
        userInfo: {} as IUser
    }),
    actions: {
        async profileInfo() {
            this.userInfo = await apiClient.profile.getInfo()
        }
    },
    getters: {

    }
})