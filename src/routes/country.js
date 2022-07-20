const {Router} = require('express');
const router = Router();

const {getCountry, createCountry, deleteCountry}=require('../controllers/country.controller')



router.get('/Country', getCountry);
router.post('/Country', createCountry);
router.delete('/Country/:nombre', deleteCountry);

module.exports = router;