const express = require('express');
const multer = require('multer');
const multerconfig = require('./config/multer');

const routes = express.Router();

const PastaController = require('./controllers/PastaController')
const ArquivoController = require('./controllers/ArquivoController')

routes.post("/pasta", PastaController.store); //req e res foram p/ o controller
    //single é p/ enviar apenas um arq. por vez, e "arquivo" tem q ser o valor do campo de mesmo nome no front-end
routes.post(
    "/arquivo", 
    multer(multerconfig).single('arquivo'), 
    ArquivoController.store
    );


module.exports = routes; //exporta alguma info do arq. no caso a var routes da linha 3.