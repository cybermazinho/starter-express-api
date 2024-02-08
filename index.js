const express = require('express')
const app = express()

const array = []

app.post('/', (req, res) => {
    array.push(req.body)
    res.status(200).json({ message: "Usuario Cadastrado!"}).end()

})

app.get('/', (req, res) => {
    res.status(201).json(array).end()

})


app.listen(process.env.PORT || 3000)