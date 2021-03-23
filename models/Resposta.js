
const Sequelize = require("sequelize");
const connection = require("./database");

const Resposta = connection.define("resposta",{
    corpo:{
        type: Sequelize.TEXT,
        allowNull:false
    },
    perguntaId: {
        type:Sequelize.INTEGER,
        allowNull:false
    }
})

Resposta.sync({force:false}).then(()=>{
    console.log("Tabela criada com sucesso...")
}).catch((err)=>{
    console.log("erro ao cria a atabela... Erro>>> ", err)

})
module.exports = Resposta;