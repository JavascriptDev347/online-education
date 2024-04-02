import { IUser } from "../auth"

export interface IProfileApiClient {
    getInfo: () => Promise<IUser>
    uploadImage: () => Promise<void>
    updateInfo: () => Promise<void>
    changePassword: () => Promise<void>
}