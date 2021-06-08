const express = require('express')
const app = express()
const path = require('path')
// const cors = require('cors')
const port = process.env.PORT || 5000;
// const https = require('https');




app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {

    console.log('A get request has been made')
    // res.send('Hello from node js from naheed')
    res.sendFile(path.join(__dirname + '/home.html'));
    
    
})

app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

