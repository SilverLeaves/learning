const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        main: './src/main.js'
    },
    output: {
        // 这玩意需要一个绝对路径，但是/会直接跑到驱动器根目录下面
        path: path.resolve(__dirname, 'dist')
    }
};