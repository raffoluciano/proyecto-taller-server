const {Router} = require('express');
const router = Router();
const bodyParser = require('body-parser');

const {getUsers,createUser,getUsersById,deleteUser,updateUser,loginUser,getRoleUserByEmail}=require('../controllers/user.controller')

router.use(bodyParser.json());

router.get('/user', getUsers);
router.get('/:id', getUsersById);
router.post('/user',createUser);
router.post('/login', loginUser);
router.delete('/user/:id', deleteUser);
router.put('/user', updateUser);
router.get('/role/:email',getRoleUserByEmail)



module.exports = router;