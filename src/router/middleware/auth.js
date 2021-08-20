const auth = function({ next, store, nextMiddleware }) {
    if (!store.getters.auth) {
        console.log("auth", store.getters.auth)
        return next({
            name: 'Login'
        })
    }

    return nextMiddleware()
}

const test = function(store) {
    if (!store.getters.auth) {
        console.log("auth", store.getters.auth)
        return next({
            name: 'Login'
        })
    }
    return nextMiddleware()
}

export {
    auth,
    test
}