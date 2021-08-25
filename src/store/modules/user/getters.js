export const getters = {
    getUserInfo(state) {

        return state
    },
    isAuth(state) {
        return state.isAuth
    },
    getAdminRole(state) {
        let bool = false;
        state.user.roles.forEach(item => {
            console.log(item);
            if (item === "admin") {
                bool = true;
            }
        });
        return bool;
    }
}
export default getters;