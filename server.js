const express = require('express');
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const projetoSchema = require("./models/projeto");
const router = require("./route/router");


mongoose.connect('mongodb://localhost/portifolio', {useNewUrlParser:true, 
useUnifiedTopology: true})

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));

app.use(express.json());


const port = 300

app.get("/", (req, res) => {
    res.render("index", { text: "Dizolele Pedro"})
})



app.use(router);

app.listen(port, () => {
    console.log(`Rodando o servidor express no localhost porta ${port}`)
})