import {ITeacherApiClientUrls} from "@/interfaces";
import {TeacherApiClient} from "@/modules/api-client/teacher/TeacherApiClient";

const urls: ITeacherApiClientUrls = {
    getGroups: "/teachers/get-groups"
}

const teacherApiClient = new TeacherApiClient(urls);
export default teacherApiClient;