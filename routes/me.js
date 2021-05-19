const express = require('express');
const router = express.Router();
const MeControllers = require('../app/controllers/MeControllers');
router.get('/trash',MeControllers.TrashBooks);
router.patch('/:id/restore',MeControllers.restore);
router.delete('/:id/delete',MeControllers.delete);
router.get('/:id/edit',MeControllers.edit);
router.get('/',MeControllers.storedBooks);
router.delete('/:id/force',MeControllers.forceDestroy);
module.exports = router;
 