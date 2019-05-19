const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors'); //cors: auxilia no acesso em domínio diferente, para q possa ser consumida a aplicação

const app = express();

app.use(cors()); //É um middleware, porém veio antes de tudo aqui.

const server = require('http').Server(app);
const io = require('socket.io')(server); //socket usa outro protocolo, o de web socket e ñ o http q é usado pelas API REST

//Real Time - Aq o usuário terá uma sala única os arqs q forem enviado, só este user poderá ver
io.on('connection', socket => {
  socket.on('connectRoom', pasta => {
    socket.join(pasta);
  })
});

mongoose.connect('mongodb+srv://elnino:elnino@cluster0-dcd07.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true
});

app.use((req, res, next) => {
  req.io = io;

  return next();
}); 

//MIDDLEWARES
app.use(express.json()); // trabalha com arq. json
app.use(express.urlencoded({ extended: true})); // permite o envio de arquivos
app.use('/arquivo', express.static(path.resolve(__dirname, '..', 'tmp'))); //Toda vez q a rota arquivo for acessada. isso vai buscar os arquivos físicos da pasta tmp

app.use(require("./routes"))// importando o arquivo. routes.js


server.listen(process.env.PORT || 3333);

/*MVC dentro do projeto Web 2:
Model-> entende-se como uma abstração do banco de dados, cada tabela ou schema do BD 
irá ter um arquivo q o repesenta.
Controller: Representa a regra de negócio da minha aplicação.
View: É a camada de visualização, tem por responsabilidade trazer a aplicação ao usuário */