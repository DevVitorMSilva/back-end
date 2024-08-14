const express = require('express')
const app = express()
const PORT = 3001

const alunos = []

app.use(express.json())

app.listen(PORT, () =>{
    console.log(`App online na porta ${PORT}`)
})

app.get('/usuarios', (req, res) => {
    res.status(200).send({alunos :alunos})
})

app.get('/usuarios/:id', (req, res) => {
    const aluno = alunos.find(x => x.id == req.params.id)
    res.status(200).send(aluno)
})

app.post('/usuarios', (req, res) => {
    console.log("API post usuário")
    alunos.push(req.body)
    res.status(200).send(req.body)
})

app.put('/usuarios/:id', (req, res) => {
    const aluno = alunos.find(x => x.id == req.params.id)
    const idAluno = alunos.indexOf(aluno)
    alunos[idAluno] = req.body
    res.status(200).send("aluno atualiazdo com sucesso")
})

app.delete('/usuarios/:id', (req, res) => {
    const aluno = alunos.find(x => x.id == req.params.id)
    const idAluno = alunos.indexOf(aluno)
    alunos.splice(idAluno, 1)
    res.status(200).send("aluno deletado com sucesso")
}) 


