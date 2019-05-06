//52:32
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://elnino:elnino@cluster0-dcd07.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
});

app.use(express.json()); // trabalha com arq. json
app.use(express.urlencoded({ extended: true})); // permite o envio de arquivos

app.use(require("./routes"))// importando o arq. routes.js

app.set('view engine', 'ejs');

app.listen(3333);

/*MVC dentro do projeto Web 2:
Model-> entende-se como uma abstração do banco de dados, cada tabela ou schema do BD 
irá ter um arquivo q o repesenta.
Controller: Representa a regra de negócio da minha aplicação.
View: É a camada de visualização, tem por responsabilidade trazer a aplicação ao usuário */