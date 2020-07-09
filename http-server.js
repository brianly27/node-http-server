const http = require('http')

const port = 3000 

// the function passed to http.createserver takes the argument req that represents a 
// request from a client as an object called http.IncomingMessage

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('hi world')
    res.end('<h1>Hello World</h1>')
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
    console.log(process.env.port)
})