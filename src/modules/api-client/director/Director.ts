import { IDirectorApiClientUrls } from "@/interfaces";
import { DirectorApiClient } from "./IDirectorApiClient";

const urls: IDirectorApiClientUrls = {
    createStaff: "/director/add-staff",
    deleteStaff: "/director/delete-staff",
    getStaffs: "/director/get-staffs/{q}"
}

const directorApiClient = new DirectorApiClient(urls)

export default directorApiClient;