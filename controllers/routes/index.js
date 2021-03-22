const express = require("express");
const router = express.Router();
const home = require('../home')
const perguntar= require("../perguntar")
const salvarPergunta = require("../salvarPergunta")
const pergunta  =require("../pergunta")


//ROTAS
router.get("/", home.get )
router.get("/perguntar", perguntar.get)
router.post("/salvarpergunta", salvarPergunta.post)
router.get("/pergunta/:id", pergunta.get)


module.exports = router