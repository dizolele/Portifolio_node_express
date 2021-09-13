const mongoose = require("mongoose");

const Schema = mongoose.Schema

const projetoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Projetos", projetoSchema );