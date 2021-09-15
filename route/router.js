const express = require("express");
const router = express.Router();
const projetoSchema = require("../models/projeto");

router.get("/create", async (req, res) => {
    const projetoschema = await projetoSchema.create(
            {nome: "Projeto Blog", link: "https://github.com/dizolele/Projeto_Blog-backend",
             descricao: "Trabalhando as operaçôes CRUD" }
            )
            
    res.json({ projetoschema })
})

router.get("/read", async (req, res) => {
    const projetoschema = await projetoSchema.find({ })

    res.json({ projetoschema })
})

router.get("/read/:id", async (req, res) => {
    const projetoschema = await projetoSchema.findById(req.params.id)

    res.json({ projetoschema })
})

router.get("/update/:id", async (req, res) => {
    const projetoschema = await projetoSchema.findById(req.params.id)

    projetoschema.nome = "brincando mongoose"
    projetoschema.link = "https://github.com/dizolele/Brincando_Monggose_DB"
    projetoschema.descricao = "conhecendo o mongoose"

    await projetoschema.save()

    res.json({ projetoschema })
})

router.get("/delete/:id", async (req, res) => {
    const projetoschema = await projetoSchema.deleteOne({ _id: req.params.id })

    res.send("Deletado")
})





module.exports = router;