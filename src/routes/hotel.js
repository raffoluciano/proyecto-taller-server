const {Router} = require('express');
const router = Router();

const {getHotel,getHotelByLocalidad, deleteHotel, createHotel, updateHotel}=require('../controllers/hotel.controller')



router.get('/hotel', getHotel);
router.get('/hotel/:localidad',getHotelByLocalidad);
router.post('/hotel', createHotel);
router.delete('/hotel/:nombre', deleteHotel);
router.put('/hotel', updateHotel);


module.exports = router;