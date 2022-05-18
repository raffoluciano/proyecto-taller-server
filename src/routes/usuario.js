const {Router} = require('express');
const router = Router();

const {getUsers,createUser,getUsersById,deleteUser,updateUser}=require('../controllers/usuario.controller')

//user routes
router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users',createUser);
router.delete('/users/:id', deleteUser);
router.put('/users', updateUser);

//paquetes routes

module.exports = router;