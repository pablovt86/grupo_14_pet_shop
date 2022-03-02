let express = require('express');
let router = express.Router();
let controller = require('../controller/subcategoryController');
router.get('/:id', controller.all)


module.exports = router;