let { check, body } = require('express-validator');
const { users } = require('../data/dataBase')
const bcrypt = require('bcrypt')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Escribe tu email').bail()
    .isEmail()
    .withMessage('Debes ingresar un email válido'),

    body('email')
    .custom((value) => {
        let user = users.find(user=>{ 
            return user.email == value 
        });

        if(user){
            return true;
        }else{
            return false;
        }
    }).withMessage('Este email no está registrado'),

    
    check('pass')
    .notEmpty()
    .withMessage('Olvidaste escribir tu contraseña'),

    body('pass')
    .custom((value, {req}) => {
        let user = users.find(user => user.email == req.body.email);
        if(user){
            if(bcrypt.compareSync(value, user.pass)){
                return true
            }else{
                return false
            }
        }else{
            return false
        }

    }).withMessage('Contraseña incorrecta.')
]