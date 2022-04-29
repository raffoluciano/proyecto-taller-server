const {Router} = require('express');
const router = Router();

const {getDestinos,getDestinoById}=require('../controllers/destino.controller')



router.get('/destinos', getDestinos);
router.get('/destino/:id',getDestinoById);

module.exports = router;