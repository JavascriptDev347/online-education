import {
    IAddGroupStudent, IAddGroupTeacher,
    IAdminPayloadGet,
    IAdminPayloadPost,
    ICoursePayload,
    ICreateCourse, IDeleteGroupIdStudent,
    IDeletePayload, ISearchStudent, ISearchTeacher,
    IStudent
} from "./IAdminPayload";
import {IAdminRequestPost} from "./IAdminRequest";

export interface IAdminApiClient {
    getAllStudents: () => Promise<IAdminPayloadGet>
    getStudentById: (id: string) => Promise<IStudent>
    createStudents: (payload: IAdminRequestPost) => Promise<IAdminPayloadPost>
    editStudent: (id: string, payload: IAdminRequestPost) => Promise<void>
    searchStudent: (phone: string) => Promise<ISearchStudent>
    deleteStudent: (id: string) => Promise<void>

    getAllTeachers: () => Promise<void>
    searchTeacher: (phone: string) => Promise<ISearchTeacher>

    getAllCourses: () => Promise<void>
    createCourse: (payload: ICreateCourse) => Promise<ICoursePayload>
    editCourse: (payload: ICreateCourse) => Promise<void>
    deleteCourse: (id: string) => Promise<IDeletePayload>

    getAllRooms: () => Promise<void>

    getAllGroups: () => Promise<void>
    addGroupStudent: (payload: IAddGroupStudent) => Promise<void>
    addGroupTeacher: (payload: IAddGroupTeacher) => Promise<void>
    groupAllStudents: (groupId: string) => Promise<void>
    deleteGroupIdStudent: (payload:IDeleteGroupIdStudent) => Promise<void>
}