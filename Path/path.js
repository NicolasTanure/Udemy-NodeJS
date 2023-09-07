const path = require('path')

console.log('normalize',path.normalize('c:\\temp/dir//subdir/dir/..'))
console.log('resolve:',path.resolve('path.js'))
