var express = require('express')
var app = express()
const bodyParser = require('body-parser');

const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/* 
app.get('/ejemplo', (req, res) => {
    res.status(200).send('Ok')
}) */
app.post('/prueba', (req, res) => {
    console.log("objeto Recibido: ",req.body);
    res.status(200).json({
        message: 'Recibido exitosamente'
    })
})

app.listen(port, () => {
    console.log(`Ejecucion en: http://localhost:${port}`)
})