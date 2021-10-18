const express = require("express");
const router = express.Router();
const Projetos = require("../models/projeto");

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require("../swagger.json");

router.use('/api-docs', swaggerUi.serve);

router.get('/api-docs', swaggerUi.setup(swaggerDocument));


router.get("/portifolios", async (req, res) => {
    const projeto = await Projetos.find({})
    res.status(200).json({ projeto })
})

router.get("/portifolio/:id", async (req, res) => {
    const projeto = await Projetos.findById(req.params.id)
    res.status(200).json({ projeto })
})

router.post("/portifolio", async (req, res, next) => {
    req.projeto = new Projetos()
    next()
}, salvarEeditar());

router.put("/update/:id", async (req, res, next) => {
    req.projeto = await Projetos.findById(req.params.id)
    next()
}, salvarEeditar());

router.delete("/delete/:id", async (req, res) => {
    await Projetos.findByIdAndDelete(req.params.id)
    res.status(200).json({message: "Portifolio deletado do banco de dados"})
})


function salvarEeditar() {
    return async (req, res) => {
    let projeto = req.projeto
    projeto.nome = req.body.nome
    projeto.link = req.body.link
    projeto.descricao = req.body.descricao

    try{
        projeto = await projeto.save()
        res.status(200).json({message: "portifolio salvo com sucesso"})
    } catch(error) {
        res.status(500).json({error: error.message})
    }
 }  
}


module.exports = router;