import { IAdminPayloadGet, IAdminPayloadPost } from "./IAdminPayload";
import { IAdminRequestPost } from "./IAdminRequest";

export interface IAdminApiClient {
    getAllStudents: () => Promise<IAdminPayloadGet>
    createStudens: (payload: IAdminRequestPost) => Promise<IAdminPayloadPost>
    getAllTeachers: () => Promise<void>
    getAllCourses: () => Promise<void>
    getAllRooms: () => Promise<void>
    getAllGroups: () => Promise<void>
}