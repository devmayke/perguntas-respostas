//CARREGANDO MÓDULOS
const express = require("express");
const app = express();
const usuario = require("./controllers/routes");
const path = require("path");
const PORT = 3000;
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const connection= require("./models/database")
const Pergunta= require("./models/Pergunta")
const Resposta= require("./models/Resposta")
module.exports = Pergunta;


//CONEXÃO COM BANCO DE DADOS
connection.authenticate()
.then(()=>{
    console.log("Conectado ao banco de dados com sucesso...")
}).catch(err=>{
    console.log("Erro ao se conectar ao banco de dados... Erro: ", err)
})

//PASTA PUBLIC - ARQUIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname,"public")))


//CONFIGURANDO EJS
app.set("view engine", "ejs");

//BODY PARSER
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//MIDDLEWARE
app.use("/", (req, res, next)=>{
    // console.log("antes de chegar no servidor")
    if(req){
        console.log("Há uma requisição: ", req.path)
    }
    next()
})

app.use("/", usuario)


app.listen(PORT, (err)=>{
    if(err){
        console.log("Não foi possível conectar ao servidor")
    }
    console.clear()
    console.log("Servidor conectado com sucesso")
})




