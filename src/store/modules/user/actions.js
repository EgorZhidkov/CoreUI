import store from "../../store"
import { API } from '../../../utils/axiosConfig 2'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import Router from 'vue-router'


const login = async({ commit }, payload) => {
    await API.post("/auth/sign-in", payload)
        .then((response) => {
            let data = response.data;
            let decode_jwt = jwt_decode(data.access_token)
            if (response.status === 201) {
                commit('setIsAuth');
                commit('setUserInfo', decode_jwt);
                sessionStorage.setItem('access_token', data.access_token)
            }
        })
        .catch(() => {
            commit('AuthError');
            return new Promise();
        })
}

const logout = ({ commit }) => {
    commit('logoutUser');
    window.sessionStorage.clear();
}

export const actions = {
    login,
    logout
}