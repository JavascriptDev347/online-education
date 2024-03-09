import { ISApiClientUrls } from "@/interfaces";
import { SApiClient } from "./SApiClient";

const urls: ISApiClientUrls = {
    getAllStudents: "/students/all"
}

const studentApiClient = new SApiClient(urls);

export default studentApiClient;