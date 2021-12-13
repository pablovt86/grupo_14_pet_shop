let express = require('express');
let router = express.Router();
let controller = require('../controller/adminController')


router.get('/', controller.index);
<<<<<<< HEAD
router.get('/agregar/:id', controller.agregar);
router.get('/actualizar', controller.actualizar);
=======
router.get('/agregar', controller.agregar);
router.get('/editar', controller.actualizar);
>>>>>>> 2f3f2dde2c4c905f878e52051c41b82a66cd4225

module.exports = router;