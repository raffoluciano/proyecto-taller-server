const { Router } = require('express');
const { getPackage, getPackageById, createPackage, deletePackage, updatePackage, getPackageByDestiny, saveImagePackage, updatePackageCupos} = require('../controllers/package.controller');
const router = Router()

router.get('/package', getPackage);
router.get('/:id', getPackageById);
router.get('/destiny/:destino', getPackageByDestiny);
router.post('/package', createPackage);
router.delete('/package/:id', deletePackage);
router.put('/package/update/:id', updatePackage);
router.put('/package/:id', updatePackageCupos);
router.post('/packageImage', saveImagePackage );
module.exports = router;