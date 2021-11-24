
const express = require('express')
const router = express.Router();
let productController = require('../controller/productsController')

let app = express();




router.get('/', productController.home)
router.get('/productDetail', productController.detail)




module.exports = router