import { ISPayload } from "./ISPayload";

export interface ISApiClient {
    getAllStudents: (q: string) => Promise<ISPayload>
}