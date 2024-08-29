const express = require("express")
const app = express()
const db = require.apply('./dataBase')
const dbcontext = db.AlunosDataBase()
const PORT = 3001

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor ligado na porta ${PORT}`)
})

app.get('/carros', async (req, res) => {
    res.status(200).send(await dbcontext.list())
})

app.get('/carros/:id', async(req, res) => {
    res.status(200).send(await dbcontext.get(req.params.id))
})

app.post('/carros', async (req, res) => {
    res.status(200).send(await dbcontext.insert(req.body))
})

app.put('/carros/:id', async(req, res) => {
    res.status(200).send(await dbcontext.update(req.body, req.params.id))
})

app.delete('/carros/:id', async(req, res) => {
    await dbcontext.del(req.params.id)
    res.status(200).send("Carro deletado com sucesso!")
})