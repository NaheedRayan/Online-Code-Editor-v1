const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const port = 5000

app.use(cors())
app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {

    console.log('A get request has been made')
    // res.send('Hello from node js from naheed')
    res.sendFile(path.join(__dirname + '/home.html'));
    
    
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

