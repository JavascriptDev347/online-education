export interface IAuthPayload {
    user: IUser,
    tokens: IToken
}

export interface IUser {
    _id?: string,
    first_name: string,
    last_name: string,
    phone: string,
    role: string,
    status: boolean,
    image: null | any,
    start_date: string
}

interface IToken {
    access_token: string,
    refresh_token: string
}