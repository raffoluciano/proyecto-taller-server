const {Router} = require('express');
const router = Router();

const {getCountry, createCountry, deleteCountry}=require('../controllers/country.controller')



router.get('/country', getCountry);
router.post('/country', createCountry);
router.delete('/country/:nombre', deleteCountry);

module.exports = router;