const { check, body } = require('express-validator');
const { users } = require('../database/dataBase');
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

    /*check('tel')
    .notEmpty()
    .withMessage('Necesario para envíos.').bail()
    .isNumeric()
    .withMessage('Solo escriba datos numéricos.')
    .isLength({min: 8, max: 15})
    .withMessage('Solo válido entre 8 y 15 dígitos.'),*/

    check('email')
    .notEmpty()
    .withMessage('El email es obligatorio.').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido.'),

    body('email')
    .custom((value) => {
        return db.User.findOne({
            where: {
                email: value
            }
        })
        .then((user)=>{
            if (user) {
                return Promise.reject('Este email ya está registrado.')
            } else {
                return true; 
            }
        })
    }),

    check('password')
    .notEmpty()
    .withMessage('El password es obligatorio.').bail()
    .isLength({min: 6, max: 6})
    .withMessage('Contraseña de 6 caracteres.'),

    check('pass2')
    .notEmpty()
    .withMessage('Repita la contraseña.').bail(),

    body('pass2').custom((value, {req}) => value !== req.body.password ? false : true)
    .withMessage('Las contraseñas no coinciden.'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar los términos.')


]