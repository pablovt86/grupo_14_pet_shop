let express = require('express');
let router = express.Router();
let controller = require('../../controller/api/productosApis');

router.get('/api/v1/products/', controller.products)
router.get('/api/v1/categories/', controller.categories)
router.get('/api/v1/categories/:id', controller.category)


module.exports = router;