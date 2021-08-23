export const mutations = {
    toggleSidebarDesktop(state) {
        const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
        state.sidebarShow = sidebarOpened ? false : 'responsive'
    },
    toggleSidebarMobile(state) {
        const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
        state.sidebarShow = sidebarClosed ? true : 'responsive'
    },
    set(state, [variable, value]) {
        state[variable] = value
    },
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
        localStorage.clear();
    }

}
export default mutations