import { IRolesApiClientUrls } from "@/interfaces";
import { RolesApiClient } from "./RolesApiClient";

const urls: IRolesApiClientUrls = {
    getAllRoles: "/roles/all"
}

const rolesApiClient = new RolesApiClient(urls)

export default rolesApiClient;