import axios from "axios";
// const local = 'https://backend-91y0.onrender.com'
const local = 'http://localhost:5000'
const production = ''
const api = axios.create({
    baseURL: `${local}/api`,
})

export default api
