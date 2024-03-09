import { IAuthPayload } from "./IAuthPayload";
import { IAuthRequest } from "./IAuthRequest";

export interface IAuthApiClient {
    login: (payload: IAuthRequest) => Promise<IAuthPayload>
    logout: () => Promise<void>
}