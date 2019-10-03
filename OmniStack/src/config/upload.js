const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, callBack) => {
            callBack(null, `${file.filename}-${Date.now()}${path.extname(file.originalname)}`);
        }
    })
};
