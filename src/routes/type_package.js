const {Router} = require('express');
const router = Router();

const {getType_paq, getType_paqById}=require('../controllers/type_pak.controller')

router.get('/type', getType_paq);
router.get('/:id', getType_paqById);

module.exports = router;