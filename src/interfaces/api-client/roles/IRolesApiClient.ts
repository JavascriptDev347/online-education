import { IRolesPayload } from "./IRolesPayload";

export interface IRolesApiClient {
    getAllRoles: () => Promise<IRolesPayload>
}