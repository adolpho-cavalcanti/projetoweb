const Pasta = require('../models/Pasta');

class PastaController {
    //método p permitir criar mais pastas
    async store(req, res) { //usei a sintaxe de async await q é mais fácil de lidar com requisições assíncronas
                            ////req: requisição contém variáveis e outros dados | res: retorna uma resposta desta requisição
        const pasta = await Pasta.create(req.body);

        return res.json(pasta);
    }
}

module.exports = new PastaController(); // o new serve para acessar os métodos da classe PastaController