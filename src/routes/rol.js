const {Router} = require('express');
const router = Router();

const {getRoles,getRoleById,updateRole}=require('../controllers/rol.controller')



router.get('/roles', getRoles);
router.get('/role/:id',getRoleById);
router.put('/roles', updateRole);
module.exports = router;