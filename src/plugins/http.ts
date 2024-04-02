import axios from "axios"
const http = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

http.interceptors.request.use((config) => {
    let token = localStorage.getItem("token")
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
}, function (err) {
    return Promise.reject(err)
})
http.interceptors.response.use((res) => {
    return res.data
}, function (err) {
    return Promise.reject(err)
}
)

export default http;