const mongoose = require('mongoose');

const Pasta = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    //O arq é um array de model.arq
    arq: [{ type: mongoose.Schema.Types.ObjectId, ref: "Arquivo" }] // essearq irá armazenar os arquivos com ids pertencente a esta pasta
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Pasta", Pasta); //Estou definindo o mongoose com o nome "Pasta" 