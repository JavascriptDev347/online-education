import { IHttpRequestParams } from "./IHttpRequestParams"

export interface IHttpClient {
    get<T>(paramters: IHttpRequestParams): Promise<T>

    //post
    post<T>(parameters: IHttpRequestParams): Promise<T>

    //put
    put<T>(paramters: IHttpRequestParams): Promise<T>

    //delete
    delete<T>(parameters: IHttpRequestParams): Promise<T>
}