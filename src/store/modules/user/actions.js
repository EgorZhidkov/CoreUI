import store from "../../store"
import API from '../../../utils/axiosConfig'
import axios from 'axios'
import jwt_decode from "jwt-decode";
import Router from 'vue-router'

const login = async({ commit }, payload) => {
    await API.post("/auth/sign-in", payload)
        .then((response) => {
            let data = response.data;
            let decode_jwt = jwt_decode(data.access_token)
            if (response.status === 201) {
                commit('setAccessToken', data.access_token);
                commit('setIsAuth');
                commit('setUserInfo', decode_jwt);
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