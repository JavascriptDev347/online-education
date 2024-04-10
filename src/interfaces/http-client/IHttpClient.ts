import {IHttpRequestParams} from "./IHttpRequestParams"

export interface IHttpClient {
    get<T>(parameters: IHttpRequestParams): Promise<T>

    //post
    post<T>(parameters: IHttpRequestParams): Promise<T>

    //put
    put<T>(parameters: IHttpRequestParams): Promise<T>

    //delete
    delete<T>(parameters: IHttpRequestParams): Promise<T>
}