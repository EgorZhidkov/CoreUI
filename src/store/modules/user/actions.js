import store from "../../store"

const logout = ({ commit }) => {
    console.log(commit('users/logoutUser'));
    window.sessionStorage.clear();
}

export default {
    logout
}