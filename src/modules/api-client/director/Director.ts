import { IDirectorApiClientUrls } from "@/interfaces";
import { DirectorApiClient } from "./DirectorApiClient";

const urls: IDirectorApiClientUrls = {
    createStaff: "/director/add-staff",
    deleteStaff: "/director/delete-staff",
    getStaffs: "/director/get-staffs/{q}",
    activeStaff: "/director/activate-staff"
}

const directorApiClient = new DirectorApiClient(urls)

export default directorApiClient;