import {IAdminPayloadGet, IAdminPayloadPost, IStudent} from "./IAdminPayload";
import {IAdminRequestPost} from "./IAdminRequest";

export interface IAdminApiClient {
    getAllStudents: () => Promise<IAdminPayloadGet>
    getStudentById: (id: string) => Promise<IStudent>
    createStudents: (payload: IAdminRequestPost) => Promise<IAdminPayloadPost>
    getAllTeachers: () => Promise<void>
    getAllCourses: () => Promise<void>
    getAllRooms: () => Promise<void>
    getAllGroups: () => Promise<void>
    deleteStudent: (id: string) => Promise<void>
    editStudent: (payload: IAdminRequestPost) => Promise<void>
}