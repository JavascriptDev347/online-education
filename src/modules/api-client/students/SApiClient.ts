import { IHttpRequestParams, ISApiClient, ISApiClientUrls, ISPayload } from "@/interfaces";
import { HttpClient } from "@/modules/http-client";

export class SApiClient implements ISApiClient {
    private readonly urls!: ISApiClientUrls;

    constructor(urls: ISApiClientUrls) {
        this.urls = urls
    }
    getAllStudents(q: string): Promise<ISPayload> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getAllStudents + "/" + q
        }

        return HttpClient.get<ISPayload>(requestParams)
    }
}