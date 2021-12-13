const express = require('express');
const router = express.Router();
let userController = require('../controller/usersController')

let app = express();




router.get('/register', userController.register)
router.get('/login', userController.login)
router.get('/profile', userController.profile)




module.exports = router