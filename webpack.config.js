/**
 * Created by gooin on 2017/4/10.
 */

// 解决不是绝对路径报错问题
var path = require('path');
module.exports = {
    entry: './src/script/main.js',
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: 'bundle.js'
    }
};