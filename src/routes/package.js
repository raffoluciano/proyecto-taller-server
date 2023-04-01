const { Router } = require('express');
const { getPackage, getPackageById, createPackage, deletePackage, updatePackage,createTransportxpackage,createDestinyxpackage, createExcursionxpackage,createHotelxpackage,createPlacexexcursion, getPackageByDestiny, getPackageByDate, getPackageByPrice, saveImagePackage} = require('../controllers/package.controller');
const router = Router()
// const { upload } = require('../upload.js');

router.get('/package', getPackage);
router.get('/:id', getPackageById);
router.get('/destiny/:destino', getPackageByDestiny);
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
router.post('/packageImage', saveImagePackage );
module.exports = router;