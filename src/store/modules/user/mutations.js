export const mutations = {
    setUserInfo(state, payload) {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.role = payload.role;
        state.isAuth = true;

    },
    logoutUser(state) {
        state.isAuth = false;
        state.user.name = '';
        state.user.email = '';
        state.user.role = '';
    }

}
export default mutations