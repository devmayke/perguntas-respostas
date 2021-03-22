const Pergunta = require("../models/Pergunta")
module.exports = {
    get: (req, res) => {
        Pergunta.findAll({ raw: true, order:[
            ["id", "DESC"]
        ] })
            .then((perguntas) => {              
                res.render("home", {
                    perguntas: perguntas
                })
            })
    }
}
       