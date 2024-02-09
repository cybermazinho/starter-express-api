const express = require('express')
const app = express()

const array = []

app.use(express.json())

app.post('/', (req, res) => {
    array.push(req.body)
    res.status(201).json({ message: "Usuario Cadastrado!"}).end()

})

app.get('/', (req, res) => {
    res.status(200).json(array).end()
})


app.listen(process.env.PORT || 3000)        