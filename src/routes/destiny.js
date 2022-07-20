const {Router} = require('express');
const router = Router();

const {getDestinations,getDestinyById,createDestiny,deleteDestiny,updateDestiny}=require('../controllers/destiny.controller')



router.get('/Destinations', getDestinations);
router.get('/destiny/:id',getDestinyById);
router.post('/Destinations',createDestiny);
router.delete('/destiny/:id', deleteDestiny);
router.put('/Destinations', updateDestiny);
module.exports = router;