const {Router} = require('express');
const router = Router();

const {getType_transport, getType_transportById,createType_transportById,deleteType_transportById}=require('../controllers/type_transport.controller')



router.get('/type_transport', getType_transport);
router.get('/type_transport:id', getType_transportById);
router.post('/type_transport', createType_transportById);
router.delete('/type_transport/:id', deleteType_transportById);
module.exports = router;



