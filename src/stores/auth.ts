import { defineStore } from "pinia";
import { IAuthRequest } from '../interfaces/api-client/auth/IAuthRequest';
import { apiClient } from "@/modules";
import router from "@/router";
export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        user: null,
        roles: [],
        image: ""
    }),
    actions: {

        async login(payload: IAuthRequest) {
            try {
                const response = await apiClient.auth.login(payload)
                console.log("u", response);

                if (response?.tokens?.access_token) {
                    localStorage.setItem("role", response?.user?.role)
                    localStorage.setItem("token", response?.tokens?.access_token)
                    console.log("oke");
                }
                if (response?.user?.role === "admin") {
                    console.log(1);
                    await router.push("/students")
                }
            } catch (error) {
                console.log("erro", error);

            }

        }
    },
    getters: {

    }
})