const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("pergunta",{
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({force: false})
.then(()=>{
    console.log("Tabela criada com sucesso...")
}).catch((err)=>{
    console.log("erro ao cria a atabela... Erro>>> ", err)

})
module.exports = Pergunta;