import Vue from 'vue'
import Vuex from 'vuex'
import auth from './router/middleware/auth'
Vue.use(Vuex)

const state = {
    user: {
        username: '',
        password: '',
        name: '',
        role: '',
        loggedIn: false
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
        try {
            state.user.loggedIn = payload.loggedIn;
        } catch (error) {
            state.user.loggedIn = true;
        }


    }
}

const getters = {
    getUserInfo: (state) => {
        let userObjJson = JSON.stringify(state.user);
        console.log("hehe", state.user);
        return state.user
    },
    auth(state) {
        return state.user.loggedIn
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters
})