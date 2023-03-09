const { Router } = require('express');
const { getPackage, getPackageById, createPackage, deletePackage, updatePackage,createTransportxpackage,createDestinyxpackage, createExcursionxpackage,createHotelxpackage,createPlacexexcursion, getPackageByDestiny, getPackageByDate, getPackageByPrice } = require('../controllers/package.controller');
const router = Router()

router.get('/package', getPackage);
router.get('/:id', getPackageById);
//router.get('/destiny/:nombre', getPackageByDestiny);
//router.get('/date/:comienzo', getPackageByDate);
//router.get('/price/:precio', getPackageByPrice);
router.post('/package', createPackage);
router.delete('/package/:id', deletePackage);
router.put('/package/:id', updatePackage);
router.post('/transportxpackage', createTransportxpackage);
router.post('/destinyxpackage', createDestinyxpackage);
router.post('/excursionxpackage', createExcursionxpackage);
router.post('/hotelxpackage', createHotelxpackage);
router.post('/placexexcursion', createPlacexexcursion);
module.exports = router;