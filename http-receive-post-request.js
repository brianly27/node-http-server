// eg post request body: {todo: 'buy the milk}

//use body-parse Node.js module

const bodyParser = require('body-parser')

app.use(
    bodyParser.urlencoded({
        extended = true
    })
)

app.use(bodyParse.json())

app.post('/todos', (req, res) => {
    console.log(req.body.todo)
})