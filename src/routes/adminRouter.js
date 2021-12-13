let express = require('express');
let router = express.Router();
let controller = require('../controller/adminController')


router.get('/', controller.index);
router.get('/agregar/:id', controller.agregar);
router.get('/actualizar', controller.actualizar);

module.exports = router;