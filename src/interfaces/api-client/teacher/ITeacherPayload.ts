export interface ITeacherGroupsPayload {
    groups: IGroup
}

interface IRoom {
    _id: string,
    name: string,
    size: number
}

interface ICourse {
    _id: string,
    name: string,
    price: number,
    period: number
}

export interface IGroup {
    _id?: string,
    name: string,
    start_date: string,
    days: boolean,
    start_time: number,
    end_time: number,
    room: IRoom,
    status: boolean,
    course: ICourse,
    student_count: number,
    end_date: Date
}

