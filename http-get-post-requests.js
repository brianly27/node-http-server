//get request:

const https = require('https')
const options = {
    hostname: 'google.com',
    port: 433,
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on ('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.error(error)
})

req.end

// post request:

// const https = require('https')
// const options = {
//     hostname: 'whatever.com',
//     port: 433,
//     path: './todos',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': data.length

//     }
// }

// const req = https.request(options, res => {
//     console.log(`statusCode: ${res.statusCode}`)

//     res.on('data', d => {
//         process.stdout.write(d)
//     })
// })

// req.on('error', error => {
//     console.error(error)
// })

// req.write(data)
// req.end