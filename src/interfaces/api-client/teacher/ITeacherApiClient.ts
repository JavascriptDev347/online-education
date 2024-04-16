import { ITeacherGroupsPayload} from "@/interfaces/api-client/teacher/ITeacherPayload";

export interface ITeacherApiClient {
    getTeacherCourses: (id: string) => Promise<ITeacherGroupsPayload[]>
}