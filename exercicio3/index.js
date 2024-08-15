const express = require("express")
const app = express()
const PORT = 3001

app.use(express.json())
const carros = []

app.listen(PORT, () => {
    console.log(`Servidor ligado na porta ${PORT}`)
})

app.get('/carros', (req, res) => {
    res.status(200).send({carros :carros})
    console.log("Carros encontrados")
})

app.get('/carros/:id', (req, res) => {
    const carro = carros.find(x => x.id == req.params.id)
    res.status(200).send(carro)
    console.log("Carro encontrado")
})

app.post('/carros', (req, res) => {
    carros.push(req.body)
    res.status(200).send(req.body)
    console.log("Carro cadastrado com sucesso!")
})

app.put('/carros/:id', (req, res) => {
    const carro = carros.find(x => x.id == req.params.id)
    const idCarro = carros.indexOf(carro)
    carros[idCarro] = req.body 
    res.status(200).send("Carro atualizado com sucesso!")
})

app.delete('/carros/:id', (req, res) => {
    const carro = carros.find(x => x.id == req.params.id)
    const idCarro = carros.indexOf(carro)
    carros.splice(idCarro, 1)
    res.status(200).send("Carro deletado com sucesso!")
})