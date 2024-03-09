import { IAdminApiClient } from "./admin";
import { IAuthApiClient } from "./auth";
import { ISApiClient } from "./student";

export interface IApiClient {
    auth: IAuthApiClient,
    student: ISApiClient,
    admin: IAdminApiClient
}