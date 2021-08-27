import axios from 'axios';
import base_URL from './config'
import "@babel/polyfill";
import store from '../store/store';
console.log(sessionStorage.getItem('access_token'))
const API = axios.create({
    baseURL: "http://localhost:8081/api/v1",
    responseType: 'json',
});
const API_WITH_HEADER = axios.create({
    baseURL: "http://localhost:8081/api/v1",
    responseType: 'json',
    headers: { Authorization: `Bearer ${sessionStorage.getItem('access_token')}` }
});
export {
    API,
    API_WITH_HEADER
};