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

    body('email')
    .custom((value) => {
        return db.User.findOne({
            where: {
                email: value
            }
        })
        .then((user)=>{
            if (value !== req.session.user.email && value === user.email) {
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
    .withMessage('Contraseña de 6 caracteres.')
]