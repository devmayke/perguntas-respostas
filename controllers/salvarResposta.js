const Sequelize = require("sequelize");
const Resposta = require("../models/Resposta");
const Pergunta =require("../models/Pergunta");
module.exports= {
    post:(req, res)=>{  
        let perguntaId = req.body.perguntaId         
        let resposta = req.body.resposta;
        Resposta.create({
            corpo:resposta,
            perguntaId: perguntaId
        }).then(()=>{
            res.redirect("/")
        })

    }
}
