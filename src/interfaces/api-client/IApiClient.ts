import {IAdminApiClient} from "./admin";
import {IAuthApiClient} from "./auth";
import {IDirectorApiClient} from "./director";
import {IProfileApiClient} from "./profile";
import {IRolesApiClient} from "./roles";
import {ISApiClient} from "./student";
import {ITeacherApiClient} from "./teacher";

export interface IApiClient {
    auth: IAuthApiClient,
    student: ISApiClient,
    admin: IAdminApiClient,
    director: IDirectorApiClient,
    roles: IRolesApiClient,
    profile: IProfileApiClient,
    teacher: ITeacherApiClient
}