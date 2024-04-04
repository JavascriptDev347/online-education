import {
    IAdminApiClient,
    IAdminApiClientUrls,
    IAdminPayloadGet,
    IAdminPayloadPost,
    IAdminRequestPost, ICoursePayload, ICreateCourse, IDeletePayload,
    IHttpRequestParams, IStudent
} from "@/interfaces";
import {HttpClient} from "@/modules/http-client";

export class AdminApiClient implements IAdminApiClient {
    private readonly urls!: IAdminApiClientUrls;

    constructor(urls: IAdminApiClientUrls) {
        this.urls = urls
    }

    getAllStudents(): Promise<IAdminPayloadGet> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getAllStudents
        }

        return HttpClient.get<IAdminPayloadGet>(requestParams)
    }

    getStudentById(id: string): Promise<IStudent> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getStudentById + "/" + id
        }

        return HttpClient.get(requestParams)
    }

    createStudents(payload: IAdminRequestPost): Promise<IAdminPayloadPost> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.createStudent,
            payload
        }

        return HttpClient.post<IAdminPayloadPost>(requestParams)
    }

    deleteStudent(id: string): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.deleteStudent + "/" + id
        }

        return HttpClient.delete<void>(requestParams)
    }

    editStudent(id: string, payload: IAdminRequestPost): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.editStudent + "/" + id,
            payload
        }

        return HttpClient.put<void>(requestParams)
    }

    getAllTeachers(): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getAllTeachers
        }

        return HttpClient.get<void>(requestParams)
    }

    getAllCourses(): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getAllCourses
        }

        return HttpClient.get<void>(requestParams)
    }

    createCourse(payload: ICreateCourse): Promise<ICoursePayload> {

        const requestParams: IHttpRequestParams = {
            url: this.urls.createCourse,
            payload
        }

        return HttpClient.post<ICoursePayload>(requestParams)
    }

    editCourse(payload: ICreateCourse): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.editCourse + "/" + payload._id,
            payload
        }

        return HttpClient.put<void>(requestParams)
    }

    deleteCourse(id: string): Promise<IDeletePayload> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.deleteCourse + "/" + id
        }
        return HttpClient.delete<IDeletePayload>(requestParams)
    }

    getAllRooms(): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getAllRooms
        }

        return HttpClient.get<void>(requestParams)
    }

    getAllGroups(): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getAllGroups
        }

        return HttpClient.get<void>(requestParams)
    }


}