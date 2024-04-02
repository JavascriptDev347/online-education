import { IProfileApiClientUrls } from "@/interfaces";
import { ProfileApiClient } from "./ProfileApiClient";

const urls: IProfileApiClientUrls = {
    changePassword: "",
    getInfo: "/profile/info",
    updateInfo: "",
    uploadImage: ""
}

const profileApiClient = new ProfileApiClient(urls)

export default profileApiClient;