import { IAuthApiClientUrls } from "@/interfaces";
import { AuthApiClient } from "./AuthApiClient";

const urls: IAuthApiClientUrls = {
    login: "/auth/login",
    logout: "/auth/logout"
}

const authApiClient = new AuthApiClient(urls)

export default authApiClient;