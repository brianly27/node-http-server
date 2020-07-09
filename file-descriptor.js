const fs = require('fs')

fs.open('./test.txt', 'r', (err, fd) => {
    console.log('%o', fd)
})