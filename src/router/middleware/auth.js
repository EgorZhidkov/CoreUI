export default function auth({ next, store, nextMiddleware }) {
    if (!store.getters.auth.loggedIn) {
        console.log("auth", store.getters.auth.loggedIn)
        return next({
            name: 'Login'
        })
    }
    console.log("auth", store.getters.auth.loggedIn)
    return nextMiddleware()
}