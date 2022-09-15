const {Router} = require('express');
const router = Router();

const {getDestinations,getDestinyById,createDestiny,deleteDestiny,updateDestiny}=require('../controllers/destiny.controller')



router.get('/destiny', getDestinations);
router.get('/:id',getDestinyById);
router.post('/destiny',createDestiny);
router.delete('/destiny/:id', deleteDestiny);
router.put('/destiny', updateDestiny);
module.exports = router;