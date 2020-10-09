var express = require('express')
var app = express()

const port = 3000

app.get('/prueba', (req, res) => {
    res.status(200).send('Ok')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})