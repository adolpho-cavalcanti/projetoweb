const multer = require('multer');
const path = require('path');
module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    storage: multer.diskStorage({
        destination: () => {},
        filename: () => {},
    }) //onde será armazenado o arquivo
};