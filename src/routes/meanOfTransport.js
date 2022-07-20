const { Router } = require('express');
const { getMeanOfTransport, getMeanOfTransportById, createMeanOfTransportById, deleteMeanOfTransportById, updateMeanOfTransport } = require('../controllers/meanOfTransport.controller');
const router = Router()

router.get('/meanOfTransport', getMeanOfTransport)
router.get('/meanOfTransport/:id', getMeanOfTransportById)
router.post('/meanOfTransport', createMeanOfTransportById)
router.delete('/meanOfTransport/:id',deleteMeanOfTransportById)
router.put('/meanOfTransport', updateMeanOfTransport)

module.exports = router;