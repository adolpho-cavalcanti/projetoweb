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
    timestamps: true,
    toObject: {virtuals: true},
    toJSON: {virtuals: true},
}
);
//Campo Virtual(existe só no lado do back)
Arquivo.virtual('url').get(function() {
    return `http://localhost:3333/arquivo/${encodeURIComponent(this.caminho)}`
})

module.exports = mongoose.model("Arquivo", Arquivo); //Estou definindo o mongoose com o nome "Arquivo" 