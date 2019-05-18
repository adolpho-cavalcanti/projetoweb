const Pasta = require('../models/Pasta');
const Arquivo = require('../models/Arquivo');

class ArquivoController {
    //método p permitir criar mais pastas
    async store(req, res) { //req: requisição contém variáveis e outros dados | res: retorna uma resposta desta requisição
        //pegar a pasta do BD
        const pasta = await Pasta.findById(req.params.id) //req.params retorna todos os parametros que vem através de rora        

// originalname: é o nome do arq. que o usuário subiu na aplicação        
//caminho: req.Arquivo.key: Foi o caminho criado no Multer        
        const arquivo = await Arquivo.create({
            titulo: req.file.originalname,
            caminho: req.file.key
        });
        pasta.arq.push(arquivo);
        await pasta.save();

        return res.json(arquivo); //vou retorná o arquivo que acabou de ser criado p/ o front
    }
}

module.exports = new ArquivoController(); // o new serve para acessar os métodos da classe ArquivoController