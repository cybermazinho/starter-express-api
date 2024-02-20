const express = require('express')
const app = express()
const cors = require('cors');

const array = []

app.use(cors());
app.use(express.json())


app.post('/', (req, res) => {
    array.push(req.body)
    res.status(201).json({ message: "Usuario Cadastrado!"}).end()

})

app.get('/', (req, res) => {
    console.log(array)
    res.status(200).json(array).end()
})

app.patch('/', (req, res) => {
    array.forEach(item => {
        if(item.name === req.body.name){
            item.age = req.body.age
        }
    })
    res.status(201).json(array).end()
})

app.listen(process.env.PORT || 3000)        