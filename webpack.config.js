const path = require("path");

module.exports = () => {
    var config = {
        entry: "./app.js",
        output: {
            path: path.resolve("dist"),
            filename: "bundle.js",
            publicPath: "/dist/"
        },

        module: {
            loaders: [
                { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }
            ]
        }
    };

    return config;
};