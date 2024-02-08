const express = require('express')
const app = express()

const array = []

app.use(express.json())

app.post('/', (req, res) => {
    array.push(req.body)
    res.status(200).json({ message: "Usuario Cadastrado!"}).end()

})

app.get('/', (req, res) => {
    const json = JSON.stringify(array)
    res.status(201).json(json).end()

})


app.listen(process.env.PORT || 3000)        