const {Router} = require('express');
const router = Router();

const {getExcursion,getExcursionById, createExcursion, deleteExcursion, updateExcursion}=require('../controllers/excursion.controller')



router.get('/excursion', getExcursion);
router.get('/excursion/:id',getExcursionById);
router.post('/exvursion', createExcursion);
router.delete('/excursion/:id', deleteExcursion);
router.put('/excursion/:id', updateExcursion);

module.exports = router;