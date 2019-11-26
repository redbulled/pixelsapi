import axios from 'axios'

const API_KEY = '563492ad6f91700001000001c80287c3c56941d786143c626822926b';
const http = axios.create({
    baseURL: 'https://api.pexels.com/v1/',
    headers: {'Authorization': API_KEY}
})

export {http, API_KEY}
