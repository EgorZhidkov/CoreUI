import Vue from 'vue'
import Vuex from 'vuex'
import createVuexCache from 'vuex-cache';
import createPersistedState from 'vuex-persistedstate'
import { users } from './modules/user/index'
import VuexPersistence from 'vuex-persist';


Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.sessionStorage
})

const store = new Vuex.Store({
    modules: {
        users
    },
    plugins: [vuexLocal.plugin]
});
export default store;