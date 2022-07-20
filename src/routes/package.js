const { Router } = require('express');
const { getPackage, getPackageById, createPackage, deletePackage, updatePackage,createTransportePorPaquete,createDestinoPorPaquete, createExcursionPorPaquete,createHotelPorPaquete,createLugarPorExcursion } = require('../controllers/package.controller');
const router = Router()

router.get('/package', getPackage);
router.get('/package/:id', getPackageById);
router.post('/package', createPackage);
router.delete('/package/:id', deletePackage);
router.put('/package', updatePackage);
router.post('/transportePorPaquete', createTransportePorPaquete);
router.post('/destinoPorPaquete', createDestinoPorPaquete);
router.post('/excursionPorPaquete', createExcursionPorPaquete);
router.post('/hotelPorPaquete', createHotelPorPaquete);
router.post('/lugarPorExcursion', createLugarPorExcursion);
module.exports = router;