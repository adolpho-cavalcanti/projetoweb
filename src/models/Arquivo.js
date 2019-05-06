const mongoose = require('mongoose');

const Arquivo = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    caminho: {
        type: String,
        required: true,
    },
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Arquivo", Arquivo); //Estou definindo o mongoose com o nome "Pasta" 