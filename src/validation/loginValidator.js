let { check, body } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../database/models');

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
        });
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
                console.log(value)
                const clave = bcrypt.compareSync(value, user.dataValues.password);
                   
                if(clave){
                    return true;
                }else{
                    return Promise.reject('credeciales inválida.');
                }
            }else{
                return Promise.reject('Usuario no encontrado.')
            }
        });
    })
]