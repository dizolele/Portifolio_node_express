const express = require("express");
const router = express.Router();
const projetoSchema = require("../models/projeto");

// router.get("/create", async (req, res) => {
//     const projetoschema = await projetoSchema.create(
//             {nome: "Projeto Blog", link: "https://github.com/dizolele/Projeto_Blog-backend",
//              descricao: "Trabalhando as operaçôes CRUD" }
//             )
            
//     res.json({ projetoschema })
// })

module.exports = router;