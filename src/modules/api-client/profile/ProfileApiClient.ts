import { IHttpRequestParams, IProfileApiClient, IProfileApiClientUrls, IUser } from "@/interfaces";
import { HttpClient } from "@/modules/http-client";

export class ProfileApiClient implements IProfileApiClient {
    private readonly urls!: IProfileApiClientUrls;

    constructor(urls: IProfileApiClientUrls) {
        this.urls = urls
    }

    getInfo(): Promise<IUser> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.getInfo
        }

        return HttpClient.get<IUser>(requestParams)
    }

    uploadImage(): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.uploadImage
        }
        return HttpClient.post(requestParams)
    }



    changePassword(): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.changePassword
        }
        return HttpClient.post(requestParams)
    }


    updateInfo(): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.updateInfo
        }
        return HttpClient.post(requestParams)
    }


}