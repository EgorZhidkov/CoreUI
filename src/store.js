import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    user: {
        username: '',
        password: '',
        name: '',
        role: '',
    },
    sidebarShow: 'responsive',
    sidebarMinimize: false
}

const mutations = {
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
    setUser(state, payload) {
        state.user.username = payload.username;
        state.user.password = payload.password;
        state.user.name = payload.name;
        state.user.role = payload.role;

    }
}

const getters = {
    getUserInfo(state) {
        let userObjJson = JSON.stringify(state.user);
        console.log("hehe", userObjJson);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})