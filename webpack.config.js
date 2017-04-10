/**
 * Created by gooin on 2017/4/10.
 */

// 解决不是绝对路径报错问题
var path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main:'./src/script/main.js',
        page:['./src/script/a.js','./src/script/b.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name]-[chunkhash].bundle.js',
        publicPath: 'https://gooin.win/'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            title: 'Webpack is good',
            date: new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true

            }
        })
    ]
};