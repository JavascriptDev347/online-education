import { AxiosError, AxiosResponse } from "axios";
import { IHttpClient, IHttpRequestParams } from "../../interfaces";
import http from "../../plugins/http";
import { HttpClientError } from ".";

export class HttpClientModel implements IHttpClient {
    get<T>(paramters: IHttpRequestParams): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const { url, params } = paramters;
            try {
                http.get(url, { params }).then((response: AxiosResponse) => {
                    resolve(response as T)
                    console.log("response", response)
                }).catch((error: AxiosError) => {
                    console.info('------ rejecting ----', error);
                    HttpClientError(error)
                    reject(error);
                })
            } catch (error) {
                console.log("cacth error", error);

            }
        })
    }


    post<T>(parameters: IHttpRequestParams): Promise<T> {
        return new Promise((resolve, reject) => {
            const { url, payload } = parameters;
            try {
                http.post(url, payload).then((response: AxiosResponse) => {
                    resolve(response as T)
                    console.log('post', response)
                }).catch((error: AxiosResponse) => {
                    HttpClientError(error)
                    reject(error)
                    console.log("123", error);
                })
            } catch (e) {
                reject(e)
                console.log("try catch error", e)
            }
        });
    }



    put<T>(parameters: IHttpRequestParams): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const {
                url,
                payload,
            } = parameters;

            try {
                http.put(url, payload)
                    .then((response: AxiosResponse) => {
                        resolve(response.data as T);
                        console.log('put')
                    })
                    .catch((error: AxiosResponse) => {
                        console.log('rejecting')
                        reject(error);
                    });
            } catch (e) {
                console.log("try catch error", e)
            }
        });
    }

    delete<T>(parameters: IHttpRequestParams): Promise<T> {
        return new Promise((resolve, reject) => {
            const { url, params } = parameters;
            try {
                http.delete(url, params).then((response: AxiosResponse) => {
                    resolve(response as T)
                    console.log('delete')
                }).catch((error: AxiosError) => {
                    console.log('reject')
                    reject(error)
                })
            } catch (e) {
                console.log("try catch error", e)
            }
        })
    }
}