
const Resposta = require("../models/Resposta")
const Pergunta = require("../models/Pergunta")
module.exports={
    get:(req, res)=>{     
        let id = req.params.id
        Pergunta.findOne({
            where:{id:id}
        }).then(pergunta=>{
            Resposta.findAll({raw:true,
                where:{perguntaId:id}                
            }).then(resposta=>{
                res.render("pergunta", {pergunta:pergunta, resposta:resposta})

            })
            
        })        
    }
}