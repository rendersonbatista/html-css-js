import express from "express"

const app = express()
const port = 9090

app.use(express.json())

app.post("/user", (req, res) => {
    const dados = res.body
    console.log(dados)

    res.status(201).json({
        mesagem: "Usuário recebido",
        usuario: dados
    })
})

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta: http://localhost:${port}`)
})