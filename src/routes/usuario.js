const {Router} = require('express');
const router = Router();

const {getUsers,createUser,getUsersById,deleteUser}=require('../controllers/usuario.controller')

//user routes
router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users',createUser);
router.delete('/users/:id', deleteUser);
//paquetes routes

module.exports = router;