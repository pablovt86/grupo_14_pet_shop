let express = require('express');
let router = express.Router();
let controller = require('../controller/adminController.js');


router.get('/', controller.index);
router.get('/agregar', controller.agregar);
router.get('/actualizar', controller.actualizar);

module.exports = router;