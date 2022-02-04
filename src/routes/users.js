const express = require('express');
const router = express.Router();
const userController = require('../controller/usersController');
const uploadAvatar = require('../middleware/uploadAvatar')
const registerValidator = require('../validation/registerValidator');
const loginValidator = require('../validation/loginValidator');
const profileValidator = require('../validation/profileValidator');

router.get('/register', userController.register);
router.post('/register',uploadAvatar.single('avatar'), registerValidator,userController.processRegister);

router.get('/login', userController.login);
router.post('/login',loginValidator, userController.processLogin);
router.get('/logout', userController.logout);


router.get('/profile', userController.profile);
router.put('/profile/:id/edit', profileValidator, userController.edit);

module.exports = router;