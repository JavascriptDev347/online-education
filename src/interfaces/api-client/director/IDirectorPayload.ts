export interface IDirectorCreatePayload {
    staff: IStaff
}

export interface IStaff {
    first_name: string,
    last_name: string,
    phone: string,
    status: boolean,
    role: string,
    image: string | null,
    start_date: string,
    id: string
}



