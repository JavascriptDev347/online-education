import { IDirectorReq } from "./IDirectorReq";
import { IDirectorCreatePayload } from './IDirectorPayload';

export interface IDirectorApiClient {
    getAllStaffs: () => Promise<any>
    createStaff: (payload: IDirectorReq) => Promise<IDirectorCreatePayload>
    deleteStaff: (id: string) => Promise<void>
    activeStaff: (payload: any) => Promise<void>
}