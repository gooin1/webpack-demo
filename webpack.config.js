/**
 * Created by gooin on 2017/4/10.
 */

// 解决不是绝对路径报错问题
var path = require('path');
module.exports = {
    entry: {
        main:'./src/script/main.js',
        page:['./src/script/a.js','./src/script/b.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: '[name]-[chunkhash].bundle.js'
    }
};