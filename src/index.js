const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

app.listen(PORT, () =>{
    console.log(`App online na porta ${PORT}`)
})

app.get('/usuarios', (req, res) => {
    console.log("API get todos")
    res.status(200).send("todos os usuários")
})

app.get('/usuarios/:id', (req, res) => {
    console.log("API get by id")
    res.status(200).send(req.params.id)
})

app.post('/usuarios', (req, res) => {
    console.log("API post usuário")
    res.status(200).send(req.body)
})

app.put('/usuarios/:id', (req, res) => {
    console.log("API put usuário")
    res.status(200).send(req.params.id)
})

app.delete('/usuarios/:id', (req, res) => {
    console.log("API delete usuários")
    res.status(200).send(req.params.id)
}) 


