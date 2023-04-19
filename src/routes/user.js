const {Router} = require('express');
const router = Router();
const bodyParser = require('body-parser');

const {getUsers,createUser,getUsersById,deleteUser,updateUser,loginUser}=require('../controllers/user.controller')

router.use(bodyParser.json());
//user routes
router.get('/user', getUsers);
router.get('/:id', getUsersById);
router.post('/user',createUser);
router.post('/login', loginUser);
router.delete('/user/:id', deleteUser);
router.put('/user', updateUser);

//paquetes routes

module.exports = router;