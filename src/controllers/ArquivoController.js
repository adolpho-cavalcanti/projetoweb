const Arquivo = require('../models/Arquivo');

class ArquivoController {
    //método p permitir criar mais pastas
    async store(req, res) { //req: requisição contém variáveis e outros dados | res: retorna uma resposta desta requisição
        
        console.log(req.arquivo);
        return res.send("OK");
    }
}

module.exports = new ArquivoController(); // o new serve para acessar os métodos da classe ArquivoController