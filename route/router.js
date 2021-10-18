const express = require("express");
const router = express.Router();
const Projetos = require("../models/projeto");

// router.get("/create", async (req, res) => {
//     const projetoschema = await projetoSchema.create(
//             {nome: "Projeto Blog", link: "https://github.com/dizolele/Projeto_Blog-backend",
//              descricao: "Trabalhando as operaçôes CRUD" }
//             )
            
//     res.json({ projetoschema })
// })

// router.get("/read", async (req, res) => {
//     const projetoschema = await projetoSchema.find({ })

//     res.json({ projetoschema })
// })

// router.get("/read/:id", async (req, res) => {
//     const projetoschema = await projetoSchema.findById(req.params.id)

//     res.json({ projetoschema })
// })

// router.get("/update/:id", async (req, res) => {
//     const projetoschema = await projetoSchema.findById(req.params.id)

//     projetoschema.nome = "brincando mongoose"
//     projetoschema.link = "https://github.com/dizolele/Brincando_Monggose_DB"
//     projetoschema.descricao = "conhecendo o mongoose"

//     await projetoschema.save()

//     res.json({ projetoschema })
// })

// router.get("/delete/:id", async (req, res) => {
//     const projetoschema = await projetoSchema.deleteOne({ _id: req.params.id })

//     res.send("Deletado")
// })

router.get("/portifolio", async (req, res) => {
    const projeto = await Projetos.find({})
    res.json({ projeto })
})

router.get("/portifolio/:id", async (req, res) => {
    const projeto = await Projetos.findById(req.params.id)
    res.json({ projeto })
})

router.post("/portifolio", async (req, res, next) => {
    req.projeto = new Projetos()
    next()
}, salvarEeditar());

router.put("/portifolio/:id", async (req, res, next) => {
    req.projeto = await Projetos.findById(req.params.id)
    next()
}, salvarEeditar());

router.delete("/portifolio/:id", async (req, res) => {
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