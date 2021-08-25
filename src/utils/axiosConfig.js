import axios from 'axios';
import base_URL from './config'
import "@babel/polyfill";

const instance = axios.create({
    
    baseURL: "http://localhost:8080/api/v1",
    responseType: 'json',
    // headers: ({ "Authorization: Bearer": store.get("token") })
});

export default instance;