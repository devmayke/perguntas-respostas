const Pergunta = require("../models/Pergunta")
module.exports = {
    post: (req, res) => {
        console.log("Título da pergunta: ", req.body.titulo)
        console.log("Descrição da pergunta: ", req.body.descricao)
        Pergunta.create({
            titulo: req.body.titulo,
            descricao: req.body.descricao
        })
            .then(() => {
                res.redirect("/")
                console.log("Resposta salva no banco de dados...")
            }).catch((err)=>{
                console.log("Erro ao salvar resposta no banco de dados... Erro>>> ", err)
            })
    }
}