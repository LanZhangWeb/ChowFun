var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.jsx'),

    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.less$/, exclude: /node_modules/, loader: 'style!css!postcss!less'},
            {test: /\.css$/, exclude: /node_modules/, loader: 'style!css!postcss'},
            /*            { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000' },*/
            {test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, loader: 'url-loader?limit=5000'}
        ]
    },

    eslint: {
        configFile: '.eslintrc'
    },

    postcss: [
        require('autoprefixer')
    ],

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),

        new webpack.HotModuleReplacementPlugin(),

        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),

        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ],

    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
};