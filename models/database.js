const Sequelize= require("sequelize");
const connection = new Sequelize("perguntas-respostas", "root", "Codebase1@1",{
    host:"localhost",
    dialect: "mysql"
});
module.exports = connection;