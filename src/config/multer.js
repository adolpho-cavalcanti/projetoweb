const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => { //cb = callback
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'));
        }, // está setado onde os arquivos vão estar
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash)=>{ //peguei o crypto e gerei 16bytes de caracter aleatórios
                if(err) cb(err);
                    //essa key vai ser o hash. 
                    //                  EX: 267r56g-arquivo.jpg                
                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            })
        },
    }) //onde será armazenado o arquivo
};