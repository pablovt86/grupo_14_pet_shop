let { check, body } = require('express-validator');
//const { users } = require('../database/dataBase');
const bcrypt = require('bcrypt');

const db = require('../database/models');
const res = require('express/lib/response');


module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Escribe tu email.').bail()
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
            if(!user){
                return Promise.reject('Este email no está registrado.');
            }
        })
    }),
    
    check('password')
    .notEmpty()
    .withMessage('Olvidaste escribir tu contraseña.'),

    body('password')
    .custom((value, {req}) => {
        return db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((user)=>{
            
            if(user){
                const clave = bcrypt.compareSync(value, user.dataValues.password);
                    console.log(clave);
                if(clave){
                    return true;
                }else{
                    return Promise.reject('Contraseña inválida.');
                }
            }else{
                return Promise.reject('Usuario no encontrado.')
            }
        });
    })
]