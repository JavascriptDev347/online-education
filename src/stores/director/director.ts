import { defineStore } from "pinia";
import { apiClient } from "@/modules";
import { IDirectorReq } from '@/interfaces';
import { message } from "ant-design-vue";

export const useDirectorStore = defineStore({
    id: "director",
    state: () => {
        return {
            staffs: <any>[],
            errorStatus: false
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
        },
        async createStaff(payload: IDirectorReq) {
            try {
                const { staff } = await apiClient.director.createStaff(payload)
                await message.success(`Success ${staff.first_name}`)
                this.errorStatus = false
            } catch (error: any) {
                this.errorStatus = true
            }
        },
        async activeStaff(payload: any) {
            await apiClient.director.activeStaff(payload)
            await this.getAllStaffs()
            await message.success("Success")
        },
        async deleteStaff(id: string) {
            try {
                await apiClient.director.deleteStaff(id);
                await this.getAllStaffs()
            } catch (error) {
                console.log("er", error);

            }
        }
    },
    getters: {

    }
})