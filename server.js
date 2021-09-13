const { json } = require('express');
const express = require('express');
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const projetoSchema = require("./models/projeto");
//const rota = require("./route/router");


mongoose.connect('mongodb://localhost/portifolio', {useNewUrlParser:true, 
useUnifiedTopology: true})

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));


const port = 300

app.get("/", (req, res) => {
    res.render("index", { text: "Dizolele Pedro"})
})

app.get("/create", async (req, res) => {
    const projetoschema = await projetoSchema.create(
            {nome: "Projeto Blog", link: "https://github.com/dizolele/Projeto_Blog-backend",
             descricao: "Trabalhando as operaçôes CRUD" }
            )
            
    res.json({ projetoschema })
})

app.get("/read", async (req, res) => {
    const projetoschema = await projetoSchema.find({})

    res.json({ projetoschema })
})

app.get("/read/:id", async (req, res) => {
    const projetoschema = await projetoSchema.findById(req.params.id)
    res.json({ projetoschema })
})

app.get("/update/:id", async (req, res) => {
    const projetoschema = await projetoSchema.findById(req.params.id)

    projetoschema.nome = "Typescript"
    projetoschema.link = "https://github.com/dizolele/Exercicio-de-POO"
    projetoschema.descricao = "Exercicio de objetos"

    await projetoschema.save()

    res.json({projetoschema})
})

app.get("/delete/:id", async (req, res) => {
    projetoschema = await projetoSchema.deleteOne({ _id: req.params.id }, () => {
        console.log("deletado no banco de dados mongodb")
    })

    res.send("deletado")
})






app.listen(port, () => {
    console.log(`Rodando o servidor express no localhost porta ${port}`)
})