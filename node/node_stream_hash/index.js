const klaw = require('klaw-redux')
const through2 = require('through2')

const items = [] // files, directories, symlinks, etc

// 过滤掉文件夹
const excludeDirFilter = through2.obj(function (item, enc, next) {
    if (!item.stats.isDirectory()) this.push(item)
    next()
})

klaw('./')
    .pipe(excludeDirFilter)
    .on('data', (item) => {
        items.push(item.path)
    })
    .on('error', (err, item) => {
        console.log(err.message)
        console.log(item.path)
    })
    .on('end', () => {
        console.log(items);
    })