import axios from 'axios';
import base_URL from './config'
import "@babel/polyfill";

const instance = axios.create({
    
    baseURL: "http://localhost:8080/api/v1",
    responseType: 'json',
    // headers: ({ "Authorization: Bearer": store.get("token") })
})
export const request = async ({
    url,
    method = 'POST',
    params
}) => {
    try {
        const { data, headers, status } = await instance({
            url,
            data: params,
            method,
        });

        if (data?.error) {
            throw data.error;
        }

        return {
            headers,
            status,
            error: null,
            result: data
        };
    } catch (error) {
        const dataError = error?.response?.data?.error || error?.response?.data?.message;
        const responseError = dataError ? {
            message: dataError?.message ?? dataError
        } : error;

        return {
            result: null,
            error: responseError
        };
    }
};
export default instance;