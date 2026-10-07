const express = require("express");
const app = express();

//middleware
app.use(express.json())//converte o corpo da requisicao em json
let id = 1

//base lembretes
const lembretes = {}


//API: Application Programming Interface: colecoes de endpoints

//criar lembrete
//post criar alguma coisa /lembretes
//endpoint: uma tripla: método, http, padrao de acesso e funcionamento
app.post("/lembretes", (req, res) => {//contem o que o cliente enviou e o objerto res que viabiliza
//eu responder para o cliente
    const texto = req.body.texto//objeto que o cliente enviou //essa expressão aqui ela resulta no objeto que está sendo enviado pelo cliente aqui para o servidor e desse objeto 
    lembretes[id] = { id: id, texto: texto }//criando um objeto com a propriedade id e a propriedade texto
    id++//incrementando o id para o próximo lembrete
    res.json({mesnsagem: 'ok'})//resposta em json
    
})
//JavaScript a gente está pegando a propriedade de texto que é único. Guardamos nessa variável aqui.





//GET / lembretes uma funcao regular (function) que recebe dois parametros: req e res
app.get("/lembretes", (req, res) => {//entregar todos os lembretes que existem 
    res.json(lembretes)//resposta em json
})
const port = 4000
app.listen(port, () => console.log(`Lembretes. ${port}.`))
