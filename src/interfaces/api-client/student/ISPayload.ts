export interface ISPayload {
    students: IS[],
    count: number
}

interface IS {
    first_name: string,
    last_name: string,
    phone: string,
    status: boolean,
    role: string,
    image: null,
    start_date: string,
    id: string
}