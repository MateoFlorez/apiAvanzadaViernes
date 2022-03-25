const express = require('express')
const app = express()

require('dotenv').config()
console.log(process.env.PORT)

app.get('/api/v1/viernes', function (req, res) { // El parametro string en la funcion es el ENDPOINT
  res.send('Hello World Im GET')
})

app.post('/api/v1/viernes', function (req, res) {
    res.send('Hello World Im POST')
})

app.put('/api/v1/viernes', function (req, res) {
    res.send('Hello World Im PUT')
})

app.delete('/api/v1/viernes', function (req, res) {
    res.send('Hello World Im DELETE')
})

app.listen(process.env.PORT,()=>{
    console.log(`Servidor encendido en el puerto ${process.env.PORT}`)
})