const express = require('express');
const router = express.Router();
const newHomeController = require('../controller/newHomeController');

router.get('/', newHomeController.home);

module.exports = router