import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    responseType: 'json',
    // headers: ({ "Authorization: Bearer": store.get("token") })
})
export default instance;