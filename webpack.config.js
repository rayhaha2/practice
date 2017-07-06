// webpack.config.dev.js
var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    // 入口文件配置
    entry: [
        './app/pages/async/index.js',
        'webpack-dev-server/client?http://localhost:1080',
    ],
    // 文件输出配置
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]-[hash].js",
    },
    devtool: 'Source Maps', //配置生成Source Maps cheap-module-eval-source-map

    // 插件项
    plugins: [
        new htmlWebpackPlugin({
            template: './app/index.html'
                //filename: './app/index.html'
        })
    ],

    // 加载器配置
    module: {
        loaders: [{
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap',
        }, {
            test: /\.css$/,
            include: /node_modules/,
            loaders: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap',
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015'],
            }
        }, {
            test: /\.(jpg|png|gif)$/,
            loaders: [
                // 编译生成一个文件，并返回对应路径
                'file-loader'
            ],
        }],
    },
};
module.exports = config;