const express = require('express');
const router = express.Router();
let productController = require('../controller/productsController');

let app = express();




router.get('/', productController.home)
router.get('/productDetail/:id', productController.detail)
router.get('/carrito', productController.carrito)
router.get('/listado', productController.list)
router.get('/product/search', productController.search)






module.exports = router