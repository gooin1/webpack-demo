/**
 * Created by gooin on 2017/4/10.
 */

// 解决不是绝对路径报错问题
var path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main:'./src/script/main.js',
        a: './src/script/a.js',
        b: './src/script/b.js',
        c: './src/script/c.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].bundle.js',
        publicPath: 'https://gooin.win/'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename: 'a.html',
            template: 'index.html',
            title: 'This is A page'
        }),
        new htmlWebpackPlugin({
            filename: 'b.html',
            template: 'index.html',
            title: 'This is B page'
        }),
        new htmlWebpackPlugin({
            filename: 'c.html',
            template: 'index.html',
            title: 'This is C page'

        })
    ]
};