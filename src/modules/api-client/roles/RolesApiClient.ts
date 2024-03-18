import { IHttpRequestParams, IRolesApiClientUrls, IRolesApiClient, IRolesPayload } from "@/interfaces";
import { HttpClient } from "@/modules/http-client";

export class RolesApiClient implements IRolesApiClient {
    private readonly urls!: IRolesApiClientUrls;

    constructor(urls: IRolesApiClientUrls) {
        this.urls = urls
    }

    getAllRoles(): Promise<IRolesPayload> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getAllRoles
        }

        return HttpClient.get<IRolesPayload>(requestParams)
    }


}