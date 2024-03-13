import { IDirectorReq } from "./IDirectorReq";

export interface IDirectorApiClient {
    getAllStaffs: () => Promise<any>
    createStaff: (payload: IDirectorReq) => Promise<void>
    deleteStaff: (id: string) => Promise<void>
}