module.exports = {
    configureWebpack: {
    devServer: {
        port: 3000,
        disableHostCheck: true,
        watchOptions: {
            poll: true
        }
    },
}
};