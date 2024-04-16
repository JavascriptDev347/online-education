import {
    IHttpRequestParams,
    ITeacherApiClient,
    ITeacherApiClientUrls,
    ITeacherGroupsPayload
} from "@/interfaces";
import {HttpClient} from "@/modules";

export class TeacherApiClient implements ITeacherApiClient {
    private readonly urls!: ITeacherApiClientUrls;

    constructor(urls: ITeacherApiClientUrls) {
        this.urls = urls;
    }

    getTeacherCourses(id: string): Promise<ITeacherGroupsPayload[]> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getGroups + "/" + id
        }

        return HttpClient.get<ITeacherGroupsPayload[]>(requestParams)
    }

}