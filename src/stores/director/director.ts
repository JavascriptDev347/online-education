import {defineStore} from "pinia";
import {apiClient} from "@/modules";
import {IDirectorReq} from '@/interfaces';
import {message} from "ant-design-vue";

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
            this.staffs = await apiClient.director.getAllStaffs()

        },
        async createStaff(payload: IDirectorReq) {
            const {staff} = await apiClient.director.createStaff(payload)
            await message.success(`Success ${staff.first_name}`)
        },
        async activeStaff(payload: any) {
            await apiClient.director.activeStaff(payload)
            await this.getAllStaffs()
            await message.success("Success")
        },
        async deleteStaff(id: string) {
            await apiClient.director.deleteStaff(id);
            await this.getAllStaffs()

        }
    },
    getters: {}
})