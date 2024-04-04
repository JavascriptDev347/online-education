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