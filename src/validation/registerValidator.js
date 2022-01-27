const { check, body } = require('express-validator');
const { users } = require('../data/dataBase')


module.exports = [
    check('first_name')
    .notEmpty()
    .withMessage('El nombre no puede estar vacío.')
    .isLength({min: 3, max: 10})
    .withMessage('Escriba entre 3 y 10 caracteres.'),

    check('last_name')
    .notEmpty()
    .withMessage('El apellido no puede estar vacío.').bail()
    .isLength({min: 3, max: 20})
    .withMessage('Escriba entre 3 y 20 caracteres.'),

    check('tel')
    .notEmpty()
    .withMessage('Necesario para envíos.').bail()
    .isNumeric()
    .withMessage('Solo escriba datos numéricos.')
    .isLength({min: 8, max: 15})
    .withMessage('Solo válido entre 8 y 15 dígitos.'),

    check('email')
    .notEmpty()
    .withMessage('El email es obligatorio.').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido.'),

    body('email')
    .custom((value) => {
        let user = users.find(user=>{ 
            return user.email == value 
        });
 
        if(user){
            return false;
        }else{
            return true;
        }
    }).withMessage('Este email ya está registrado'),

    check('pass1')
    .notEmpty()
    .withMessage('El password es obligatorio.').bail()
    .isLength({min: 6, max: 6})
    .withMessage('Contraseña de 6 caracteres.'),

    check('pass2')
    .notEmpty()
    .withMessage('Repita la contraseña.').bail(),

    body('pass2').custom((value, {req}) => value !== req.body.pass1 ? false : true)
    .withMessage('Las contraseñas no coinciden.'),

    check('terms')
    .isString('on')
    .withMessage('Debes aceptar los términos.')


]