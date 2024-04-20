import {AxiosRequestConfig} from "axios";

export interface IHttpRequestParams {
    url: string,
    params?: any,
    payload?: any,
    config?: AxiosRequestConfig
}