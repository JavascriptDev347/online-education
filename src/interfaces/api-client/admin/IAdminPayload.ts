export interface IAdminPayloadPost {
    message: string,
    user: ICreateStudent
}

interface ICreateStudent {
    first_name: string,
    last_name: string,
    phone: string,
    role: string,
    status: boolean,
    payment_status: string
}

export interface IAdminPayloadGet {
    students: Array<IStudent>
    count: number
}

export interface ISearchStudent {
    student: Array<IStudent>
}


export interface ISearchTeacher {
    teacher: any
}

export interface IStudent {
    _id: string,
    first_name: string,
    last_name: string,
    phone: string,
    status: boolean,
    role: string,
    image: null,
    start_date: Date,
    id: string
}

//course
export interface ICoursePayload {
    course: ICreateCourse
}

export interface ICreateCourse {
    name: string,
    price: number,
    period: number,
    _id?: string
}

export interface IDeletePayload {
    message: string
}

//group
export interface IAddGroupStudent {
    group: string
    student_phone: string
}

export interface IAddGroupTeacher {
    group: string,
    teacher: string
}