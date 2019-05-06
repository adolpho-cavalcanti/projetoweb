const express = require('express');

const routes = express.Router();

const PastaController = require('./controllers/PastaController')

routes.post('/pasta', PastaController.store); //req e res foram p/ o controller


module.exports = routes; //exporta alguma info do arq. no caso a var routes da linha 3.