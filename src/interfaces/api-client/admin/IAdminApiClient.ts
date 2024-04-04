import {
    IAdminPayloadGet,
    IAdminPayloadPost,
    ICoursePayload,
    ICreateCourse,
    IDeletePayload,
    IStudent
} from "./IAdminPayload";
import {IAdminRequestPost} from "./IAdminRequest";

export interface IAdminApiClient {
    getAllStudents: () => Promise<IAdminPayloadGet>
    getStudentById: (id: string) => Promise<IStudent>
    createStudents: (payload: IAdminRequestPost) => Promise<IAdminPayloadPost>
    editStudent: (id: string, payload: IAdminRequestPost) => Promise<void>
    deleteStudent: (id: string) => Promise<void>

    getAllTeachers: () => Promise<void>

    getAllCourses: () => Promise<void>
    createCourse: (payload: ICreateCourse) => Promise<ICoursePayload>
    editCourse: (payload: ICreateCourse) => Promise<void>
    deleteCourse: (id: string) => Promise<IDeletePayload>

    getAllRooms: () => Promise<void>

    getAllGroups: () => Promise<void>
}