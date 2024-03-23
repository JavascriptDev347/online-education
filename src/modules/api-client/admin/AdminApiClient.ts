import { IAdminApiClient, IAdminApiClientUrls, IAdminPayloadGet, IAdminPayloadPost, IAdminRequestPost, IHttpRequestParams } from "@/interfaces";
import { HttpClient } from "@/modules/http-client";

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

    createStudens(payload: IAdminRequestPost): Promise<IAdminPayloadPost> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.createStudent,
            payload
        }

        return HttpClient.post<IAdminPayloadPost>(requestParams)
    }

    getAllTeachers(): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getAllTeachers
        }

        return HttpClient.get<void>(requestParams)
    }

    getAllCourses(): Promise<void> {
        const requesParams: IHttpRequestParams = {
            url: this.urls.getAllCourses
        }

        return HttpClient.get<void>(requesParams)
    }

    getAllRooms(): Promise<void> {
        const requesParams: IHttpRequestParams = {
            url: this.urls.getAllRooms
        }

        return HttpClient.get<void>(requesParams)
    }

    getAllGroups(): Promise<void> {
        const requesParams: IHttpRequestParams = {
            url: this.urls.getAllGroups
        }

        return HttpClient.get<void>(requesParams)
    }
}