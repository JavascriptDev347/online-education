import { IDirectorApiClient, IDirectorApiClientUrls, IDirectorReq, IHttpRequestParams } from "@/interfaces";
import { HttpClient } from "@/modules/http-client";

export class DirectorApiClient implements IDirectorApiClient {
    private readonly urls!: IDirectorApiClientUrls;

    constructor(urls: IDirectorApiClientUrls) {
        this.urls = urls
    }

    getAllStaffs(): Promise<any> {
        const requestParams: IHttpRequestParams = {
         url:this.urls.getStaffs
        }   
        return HttpClient.get(requestParams)
    }

    createStaff(payload: IDirectorReq): Promise<void> {
        const requestParams: IHttpRequestParams = {
            url: this.urls.createStaff,
            payload
        }
        return HttpClient.post(requestParams)
    }

    deleteStaff(id: string): Promise<void>{
        const requestParams: IHttpRequestParams = {
            url:this.urls.deleteStaff + "/"+id
        }

        return HttpClient.delete(requestParams)
    }

}