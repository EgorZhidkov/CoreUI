import store from "../../store"
import API from '../../../utils/axiosConfig'
import axios from 'axios'
import jwt_decode from "jwt-decode";

const login = ({ commit }, payload) => {
    API.post("/auth/sign-in", payload)
        .then((response) => {
            let data = response.data;
            console.log("then data", response.status);
            let decode_jwt = jwt_decode(data.access_token)
            console.log("decode", decode_jwt)
            if (response.status === 201) {
                commit('setAccessToken', data.access_token);
                commit('setIsAuth');
                commit('setUserInfo', decode_jwt);
            }
        })
        .catch((error) => {
            alert("bad");
        })
        // commit('setAccessToken', data)
        // console.log("action");
}

const logout = ({ commit }) => {
    commit('logoutUser');
    window.sessionStorage.clear();
}

export const actions = {
    login,
    logout
}