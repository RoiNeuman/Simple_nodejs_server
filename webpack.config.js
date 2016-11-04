var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/app/client/client.js'
    ],
    output: {
        path: require("path").resolve("./dist"),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // ignore dev config
        new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),
        // set global vars
        new webpack.DefinePlugin({
            "process.env": {

                // Mainly used to require CSS files with webpack, which can happen only on browser
                // Used as `if (process.env.BROWSER)...`
                BROWSER: JSON.stringify(true),

                // Useful to reduce the size of client-side libraries, e.g. react
                NODE_ENV: JSON.stringify("production")

            }
        }),
        // optimizations
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            // files
            { test: /\.(jpe?g|png|gif|svg)$/, loader: "file" },
            // js
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            },
            // CSS
            {
                test: /\.css$/,
                include: path.join(__dirname, '/src/app/client/style/'),
                loader: 'style-loader!css-loader'
            }
        ]
    }
}