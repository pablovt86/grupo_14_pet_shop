const { check, body } = require('express-validator');
const db = require('../database/models');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre no puede estar vacío.')
    .isLength({min: 3, max: 10})
    .withMessage('Escriba entre 3 y 10 caracteres.'),

    check('last_name')
    .notEmpty()
    .withMessage('El apellido no puede estar vacío.').bail()
    .isLength({min: 3, max: 20})
    .withMessage('Escriba entre 3 y 20 caracteres.'),

    check('email')
    .notEmpty()
    .withMessage('El email es obligatorio.').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido.'),

    check('password')
    .notEmpty()
    .withMessage('Olvidaste escribir tu contraseña.')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/)
    .withMessage('De 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número.'),

    check('pass2')
    .notEmpty()
    .withMessage('Repita la contraseña.').bail(),

    body('pass2').custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden.'),
]