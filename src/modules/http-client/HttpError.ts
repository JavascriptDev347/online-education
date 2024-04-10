import {AxiosError} from "axios";
import {message} from 'ant-design-vue';


export const HttpClientError = async (error: AxiosError | any) => {
    const {response, code} = error;
    let errorMessage = 'Aniqlanmagan xato';

    //400,401,404,network error,
    if (code === 'ERR_BAD_RESPONSE') {
        errorMessage = response?.data
    } else if (response?.data) {
        errorMessage = response?.data?.message
    } else if (code === 'ERR_NETWORK') {
        errorMessage = 'Connection problems..'
    } else if (code === 'ERR_CANCELED') {
        errorMessage = 'Connection canceled..'
    }
    const info = () => {
        message.error(errorMessage, 5);
    };

    return info()

}