var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js(x)?$/, loader: "babel" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
      new LiveReloadPlugin()
    ]
};
