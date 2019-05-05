const express = require('express');

const routes = express.Router();


routes.get('/', (req, res) => { //req: requisição contém variáveis e outros dados | res: retorna uma resposta desta requisição
    return res.send('index.ejs');
})

module.exports = routes; //exporta alguma info do arq. no caso a var routes da linha 3.