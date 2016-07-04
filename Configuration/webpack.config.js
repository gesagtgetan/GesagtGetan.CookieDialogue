var webpack = require("webpack");

module.exports = {
    output: {
        filename: 'scripts.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            Cookies: "js-cookie",
            "window.Cookies": "js-cookie",
        })
    ]
}