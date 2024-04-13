import {defineStore} from "pinia";
import {IAuthRequest} from '@/interfaces';
import {apiClient} from "@/modules";
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
                if (response?.tokens?.access_token) {
                    // this.user = response?.user
                    localStorage.setItem("role", <string>response?.user?.role)
                    localStorage.setItem("token", <string>response?.tokens?.access_token)
                }
                const role = response?.user?.role
                if (role === "admin") {
                    console.log(1);
                    await router.push("/students")
                } else if (role === "director") {
                    await router.push("/dashboard")
                } else if (role === 'teacher') {
                    await router.push("/mycourses")
                }
            } catch (error) {
                console.log("erro", error);

            }

        }
    },
    getters: {}
})