const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        // cb(null,  path.extname(file.originalname));
        cb(null,  file.originalname);
    }
});

const upload = multer({
    storage,
    dest: path.join(__dirname, 'public/uploads'),
    limits: {fileSize: 1000000},
    fileFilter:  function (req, file, cb) {
        var filetypes = /jpeg|jpg|png|gif/;
        var mimetype = filetypes.test(file.mimetype);
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the following filetypes - " + filetypes);
    }
}).single('image');

module.exports = upload;