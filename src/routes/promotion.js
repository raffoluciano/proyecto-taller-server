const { Router } = require('express');
const {getPromotions } = require('../controllers/promotion.controller');
const router = Router()

router.get('/promotion', getPromotions)


module.exports = router;