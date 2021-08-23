export const getters = {
    getUserInfo(state) {

        return state
    },
    isAuth(state) {
        return state.isAuth
    },
    getAdminRole(state) {
        if (state.user.role === "admin") {
            return true
        } else {
            return false
        }
    }
}
export default getters;