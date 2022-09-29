const {Router} = require('express');
const router = Router();

const {getUsers,createUser,getUsersById,deleteUser,updateUser}=require('../controllers/user.controller')

//user routes
router.get('/user', getUsers);
router.get('/:id', getUsersById);
router.post('/user',createUser);
router.delete('/user/:id', deleteUser);
router.put('/user', updateUser);

//paquetes routes

module.exports = router;