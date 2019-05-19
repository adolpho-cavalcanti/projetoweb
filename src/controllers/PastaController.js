const Pasta = require('../models/Pasta');

class PastaController {
    //método p permitir criar mais pastas
    async store(req, res) { //usei a sintaxe de async await q é mais fácil de lidar com requisições assíncronas
                            ////req: requisição contém variáveis e outros dados | res: retorna uma resposta desta requisição
        const pasta = await Pasta.create(req.body);

        return res.json(pasta);
    }
    async show(req, res) {
        const pasta = await Pasta.findById(req.params.id).populate({
            path: 'arq',
            options: { sort: { createdAt: -1 } }
        }); // arq é o nome do relacionamento
         //essa linha ordena de forma descrescente os arquivos, do mais novo para o mais antigo. Se fosse 1 ao invés de -1, seria ordenação cresecente do mais antigo para o mais novo
        return res.json(pasta);
    }
}

module.exports = new PastaController(); // o new serve para acessar os métodos da classe PastaController