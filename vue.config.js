module.exports = {
    lintOnSave: false,
    runtimeCompiler: true,
    devServer: {
        proxy: 'http://172.16.0.30:8031/'
    },
    configureWebpack: {
        //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
        resolve: {
            symlinks: false
        }
    },
    transpileDependencies: [
        '@coreui/utils',
        '@coreui/vue'
    ]
}