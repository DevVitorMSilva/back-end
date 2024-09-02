const express = require("express")
const app = express()
const db = require.apply('./dataBase')
const dbcontext = db.AlunosDataBase()
const PORT = 3001

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor ligado na porta ${PORT}`)
})

app.get('/alunos', async (req, res) => {
    res.status(200).send(await dbcontext.list())
})

app.get('/alunos/:id', async(req, res) => {
    res.status(200).send(await dbcontext.get(req.params.id))
})

app.post('/alunos', async (req, res) => {
    res.status(200).send(await dbcontext.insert(req.body))
})

app.put('/alunos/:id', async(req, res) => {
    res.status(200).send(await dbcontext.update(req.body, req.params.id))
})

app.delete('/alunos/:id', async(req, res) => {
    await dbcontext.del(req.params.id)
    res.status(200).send("Carro deletado com sucesso!")
})