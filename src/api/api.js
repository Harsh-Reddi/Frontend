import axios from "axios";
const local = 'https://backend-n789.onrender.com'
const production = ''
const api = axios.create({
    baseURL: `${local}/api`,
})

export default api
