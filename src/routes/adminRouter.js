let express = require('express');
let router = express.Router();
let controller = require('../controller/adminController.js');


router.get('/', controller.index);
router.get('/agregar', controller.agregar);
router.get('/editar', controller.actualizar);

module.exports = router;