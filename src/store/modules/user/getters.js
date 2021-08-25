export const getters = {
    getUserInfo(state) {
        return state
    },
    isAuth(state) {
        return state.isAuth
    },
    getAdminRole(state) {
        let bool = false;
        try {
            state.user.roles.forEach(item => {
                console.log(item);
                if (item === "admin") {
                    bool = true;
                }
            });
            return bool;
        } catch (e) {
            if (state.user.roles === "admin") {
                return true
            } else {
                return false
            }
        }


    }
}
export default getters;