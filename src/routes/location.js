const { Router } = require('express');
const { getLocation, getLocationById, createLocation, deleteLocation, updateLocation } = require('../controllers/location.controller');
const router = Router()

router.get('/location', getLocation);
router.get('/location/:id', getLocationById);
router.post('/location', createLocation);
router.delete('/location/:id', deleteLocation);
router.put('/location', updateLocation)

module.exports = router;