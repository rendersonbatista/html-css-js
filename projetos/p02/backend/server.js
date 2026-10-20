import express from "express"

const app = express()
const port = 8080

app.use(express.json())

app.get("/", (req, res) =>{
    res.send(`Servidor rodando`)
})

app.listen(port, ()=> {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})