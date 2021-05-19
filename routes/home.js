const express = require('express');
const router = express.Router();
const homeControllers = require('../app/controllers/homeControllers');
router.use('/',homeControllers.index);
module.exports = router;
