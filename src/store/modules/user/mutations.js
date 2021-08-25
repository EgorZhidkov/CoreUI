export const mutations = {
    setUserInfo(state, payload) {
        state.user.full_name = payload.full_name;
        state.user.email = payload.email;
        state.user.roles = payload.roles;
        state.user.id = payload.id;
    },
    logoutUser(state) {
        state.isAuth = false;
        state.user.full_name = '';
        state.user.email = '';
        state.user.roles = '';
        state.access_token = '';
        state.user.id = '';
    },
    setAccessToken(state, payload) {
        state.access_token = payload;
    },
    setIsAuth(state) {
        state.isAuth = true
    },
    AuthError(state) {
        state.error = true;
    }

}
export default mutations