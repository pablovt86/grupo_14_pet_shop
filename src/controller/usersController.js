const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const fs = require('fs');
const path = require('path');

let usersController = {

    register: (req, res) => {
        res.render('users/register', {
            session: req.session
        });
    },
    
    processRegister: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let { name, last_name, email, password } = req.body;
            db.User.create({
                name,
                last_name,
                email,
                password: bcrypt.hashSync(password, 10),
                rol: 'ROL_USER',
                avatar: req.file ? req.file.filename : "default-image.png"
            })
            .then((user) => {
                res.redirect('/users/login');
            })
            .catch((error) => {console.log(error)});
        } else {
            res.render('users/register', {
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            });   
        }
    },

    login: (req, res) => {
        res.render('users/login',{
        session: req.session
        });
    },

    processLogin: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((user) => {
                req.session.user = {
                    id: user.idusers,
                    name: user.name,
                    last_name: user.last_name,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.rol
                }

                if (req.body.remember) {
                    const TIME_IN_MILISECONDS = 60000
                    res.cookie("userPetshop", req.session.user, {
                        expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                        httpOnly: true,
                        secure: true
                    });
                }
     
                res.locals.user = req.session.user;
     
                res.redirect('/');
            })
            .catch((error) => {console.log(error)});
        } else {
            res.render('users/login', {
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            }); 
        }
    },

    logout: (req,res) => {
        req.session.destroy();
        if (req.cookies.userPetshop) {
            res.cookie('userPetshop', "", { maxAge: -1 });
        }
        res.redirect('/');    
    },
   
    profile: (req, res) => {
        db.User.findOne({
            where: {idusers: req.session.user.id}
        })
        .then((user) => {
            res.render('users/profile', {
                user,
                session: req.session    
            });
        })
        .catch((error) => {console.log(error)}); 
    },

    edit: (req, res) => {
        db.User.findOne({
            where: {idusers: req.session.user.id}
        })
        .then((user) => {
            res.render('users/profileEdit', {
                user,
                session: req.session    
            });
        })
        .catch((error) => {console.log(error)}); 
    },

    update: (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
        
        /* Compruebo si el email que viene del formulario es el mismo de session, si es true
           quiere decir que el usuario no lo editó y quiere continuar con el mismo email. */
            if (req.body.email === req.session.user.email) {
                let { name, last_name, email, password, avatar } = req.body;

        /* Verifico si el usuario editó su foto de perfil, si es true, consulto la base de datos 
           para saber cual era su foto anterior. */
                if (req.file) {
                    db.User.findByPk(req.params.id)
                    .then((user) => {

                /* Verifico si la foto anterior está guardada en la carpeta public. */
                        if (fs.existsSync(path.join(__dirname, '../../public/images/users/'), user.avatar)) {
                            
                /* En el caso que encuentre lo foto vieja verifico que sea distinta de la imagen por defecto,  
                   solo la elimina si es distinta. */
                            if (user.avatar !== 'default-image.png') {
                                fs.unlinkSync(`${path.join(__dirname, '../../public/images/users/')}${user.avatar}`);
                            }    
                        } else {
                            console.log('La imagen no existe.');
                        }
                
                /* Actualizo los datos del usuario con la foto de perfil nueva. */
                        db.User.update({
                            name,
                            last_name,
                            email,
                            password: bcrypt.hashSync(password, 10),
                            avatar: req.file.filename,
                        },
                        {
                            where: {idusers: req.params.id}
                        })
                        .then((result) => {
                            req.session.destroy();
                            if (req.cookies.userPetshop) {
                                res.cookie('userPetshop', "", { maxAge: -1 });
                            }
                            res.redirect('/users/login');
                        })
                        .catch((error) => {console.log(error)});
                    
                    })
                    .catch((error) => {console.log(error)});

                } else {

                /* En el caso que retorne false y el usuario no editó su foto, Actualizo todos su datos
                   excepto el de su foto de perfil. (La foto de perfil no es un dato obligatorio.) */
                    db.User.update({
                        name,
                        last_name,
                        email,
                        password: bcrypt.hashSync(password, 10)
                    },
                    {
                        where: {idusers: req.params.id}
                    })
                    .then((result) => {

                /* Se cierra la sesión se elimina a cookie y se redirecciona a la vista de login, para
                   que inicie sesión nuevamente. */
                        req.session.destroy();
                        if (req.cookies.userPetshop) {
                            res.cookie('userPetshop', "", { maxAge: -1 });
                        }
                        res.redirect('/users/login');
                    })
                    .catch((error) => {console.log(error)});
                }
            } else {

        /* Si se editó el email, consulto a la base de datos, de paso me traigo todos los datos el usuario que 
           edita su perfil para la persistencia si huebiera errores. */
                const email = db.User.findOne({where: {email: req.body.email}});
                const user = db.User.findOne({where: {idusers: req.params.id}});
                Promise.all([email, user])
                .then(([email, user]) => {

                /* Verifico, si el email ya está en la base de datos devuelvo errores. */
                    if (email) {
                        res.render('users/profileEdit', {
                            errors: {email: {msg: 'Otro usuario ya tiene asignado este email.'}},
                            old: req.body,
                            session: req.session,
                            user
                        });
                    } else {
                        let { name, last_name, email, password, avatar } = req.body;
                /* Si el email no está en la base de datos, actualizo los datos del usuario repitiendo todos
                   los pasos anteriores. */
                        if (req.file) {
                            db.User.findByPk(req.params.id)
                            .then((user) => {
                                if (fs.existsSync(path.join(__dirname, '../../public/images/users/'), user.avatar)) {
                                    if (user.avatar !== 'default-image.png') {
                                        fs.unlinkSync(`${path.join(__dirname, '../../public/images/users/')}${user.avatar}`);
                                    }    
                                } else {
                                    console.log('La imagen no existe.');
                                }
                                db.User.update({
                                    name,
                                    last_name,
                                    email,
                                    password: bcrypt.hashSync(password, 10),
                                    avatar: req.file.filename,
                                },
                                {
                                    where: {idusers: req.params.id}
                                })
                                .then((result) => {
                                    req.session.destroy();
                                    if (req.cookies.userPetshop) {
                                        res.cookie('userPetshop', "", { maxAge: -1 });
                                    }
                                    res.redirect('/users/login');
                                })
                                .catch((error) => {console.log(error)});
                            
                            })
                            .catch((error) => {console.log(error)});

                        } else {
                            db.User.update({
                                name,
                                last_name,
                                email,
                                password: bcrypt.hashSync(password, 10)
                            },
                            {
                                where: {idusers: req.params.id}
                            })
                            .then((result) => {
                                req.session.destroy();
                                if (req.cookies.userPetshop) {
                                    res.cookie('userPetshop', "", { maxAge: -1 });
                                }
                                res.redirect('/users/login');
                            })
                            .catch((error) => {console.log(error)});
                        } 
                    }
                })
            }    
        } else {

/* Si el array de errores no está vacío, se ejecuta esta parte del codigo para la persistencia de errores. */
            db.User.findOne({
                where: {idusers: req.session.user.id}
            })
            .then((user) => {
                res.render('users/profileEdit', {
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session,
                    user
                });
            }) 
           .catch((error) => console.log(error));
        }
    }
}

module.exports = usersController;