const auth = function({ next, store, nextMiddleware }) {
    if (!store.getters["users/isAuth"]) {
        return next({
            name: 'Login'
        })
    }
    return nextMiddleware()
}
export {
    auth
}