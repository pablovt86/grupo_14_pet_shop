let express = require('express');
let router = express.Router();
let controller = require('../controller/adminController');
let upload = require('../middleware/uploadProduct');
let productsValidator = require("../validation/productsValidator");

router.get('/products', controller.products)
router.get('/products/create', controller.create);
router.post('/products/store',upload.single('image'), productsValidator, controller.store);
router.get('/products/search', controller.search)

router.get('/products/edit/:id', controller.edit);
router.put('/products/update/:id', upload.single('image'), productsValidator, controller.update);
router.delete('/products/delete/:id', controller.delete);


module.exports = router;