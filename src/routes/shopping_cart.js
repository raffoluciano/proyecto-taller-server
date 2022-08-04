const { Router } = require('express');
const {getShopping_cart,getShopping_cartById,createShopping_cart,deleteShopping_cart } = require('../controllers/shopping_cart.controller');
const router = Router()

router.get('/shopping_cart', getShopping_cart);
router.get('/shopping_cart/:id',getShopping_cartById);
router.post('/shopping_cart', createShopping_cart);
router.delete('/shopping_cart/:id', deleteShopping_cart);
module.exports = router;