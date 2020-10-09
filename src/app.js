var express = require('express')
var app = express()

const port = 3000

app.get('/ejemplo', (req, res) => {
    res.status(200).send('Ok')
})
app.post('/prueba', (req, res) => {
    console.log("recibido: "+req.body);
    res.status(200).json({
        message: 'Recibido exitosamente'
    })
})

app.listen(port, () => {
    console.log(`Ejecucion en: http://localhost:${port}`)
})