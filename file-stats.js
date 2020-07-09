const fs = require('fs')

//every file comes with a set of details that we can inspect using Node.js

fs.stat('./test.txt', (err, stats) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size 
    )
})
