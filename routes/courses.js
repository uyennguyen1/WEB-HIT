const express = require('express');
const router = express.Router();
const BookControllers = require('../app/controllers/BookControllers');
router.get('/create',BookControllers.create);
router.post('/store',BookControllers.store);
router.put('/:id',BookControllers.update);
router.get('/:slug',BookControllers.show);
module.exports = router;
