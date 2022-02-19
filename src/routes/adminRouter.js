let express = require('express');
let router = express.Router();
let controller = require('../controller/adminController');
let upload = require('../middleware/uploadProduct');
const authRouter = require('../middleware/authUsers'); 
let productsValidator = require("../validation/productsValidator");
const { authRol } = require('../middleware/authUsers');

router.get('/products', authRouter.authRol, controller.products)
router.get('/products/create', authRouter.authRol, controller.create);
router.post('/products/store', authRouter.authRol, upload.single('image'), productsValidator, controller.store);
router.get('/products/search', authRouter.authRol, controller.search)

router.get('/products/:id/edit', authRouter.authRol, controller.edit);
router.put('/products/:id/update',authRouter.authRol, upload.single('image'), productsValidator, controller.update);
router.delete('/products/delete/:id',authRouter.authRol, controller.delete);


module.exports = router;