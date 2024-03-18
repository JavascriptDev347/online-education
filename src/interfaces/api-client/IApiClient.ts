import { IAdminApiClient } from "./admin";
import { IAuthApiClient } from "./auth";
import { IDirectorApiClient } from "./director";
import { IRolesApiClient } from "./roles";
import { ISApiClient } from "./student";

export interface IApiClient {
    auth: IAuthApiClient,
    student: ISApiClient,
    admin: IAdminApiClient,
    director: IDirectorApiClient,
    roles: IRolesApiClient
}