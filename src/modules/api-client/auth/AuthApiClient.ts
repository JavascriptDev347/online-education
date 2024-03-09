import { IAuthApiClient, IAuthApiClientUrls, IAuthPayload, IAuthRequest, IHttpRequestParams } from "@/interfaces";
import { HttpClient } from "@/modules/http-client";

export class AuthApiClient implements IAuthApiClient {
    private readonly urls!: IAuthApiClientUrls;

    constructor(urls: IAuthApiClientUrls) {
        this.urls = urls
    }

    login(payload: IAuthRequest): Promise<IAuthPayload> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.login,
            payload
        }

        return HttpClient.post<IAuthPayload>(requestParams)
    }

    logout(): Promise<void> {
        return Promise.resolve(undefined);
    }

}