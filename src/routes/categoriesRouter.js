let express = require('express');
let router = express.Router();
let controller = require('../controller/categoryController');
router.get('/:id', controller.all)


module.exports = router;