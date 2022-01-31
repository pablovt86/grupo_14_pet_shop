const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const db = require('../database/models');

let usersController = {

    register: (req, res) => {
        res.render('users/register', {
            session: req.session
        });
    },
    
    processRegister: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let { name, last_name, email, password } = req.body;
            db.User.create({
                name,
                last_name,
                email,
                password: bcrypt.hashSync(password, 10),
                rol: 'ROL_USER',
                avatar: req.file ? req.file.filename : "default-image.png"
            })
            .then((user)=>{
                res.redirect('/users/login');
            })
            .catch((error)=>{
                res.send(error)
            });
        }else{
            res.render('users/register', {
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            });   
        }
    },

    login:(req, res)=>{
        res.render('users/login',{
        session: req.session
        });
    },

    processLogin: (req, res) => {
        /*let errors = validationResult(req);
        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
           
            req.session.user = {
                id: user.id,
                name: user.name,
                last_name: user.last_name,
                email: user.email,
                avatar: user.avatar,
                rol: user.rol,
                tel:user.tel
            }

           if(req.body.remember){
               const TIME_IN_MILISECONDS = 60000
               res.cookie("userPetshop", req.session.user, {
                   expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                   httpOnly: true,
                   secure: true
               })
           }

            res.locals.user = req.session.user;

            res.redirect('/')

        }else{
            res.render('users/login', {
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            })
        }*/

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then((user)=>{
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    last_name: user.last_name,
                    email: user.email,
                    avatar: user.avatar,
                    rol: user.rol
                }

                if(req.body.remember){
                    const TIME_IN_MILISECONDS = 60000
                    res.cookie("userPetshop", req.session.user, {
                        expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                        httpOnly: true,
                        secure: true
                    })
                }
     
                res.locals.user = req.session.user;
     
                res.redirect('/')
            })
        } else {
            res.render('users/login', {
                errors: errors.mapped(),
                session: req.session,
                old: req.body
            }); 
        }
    },

    logout:(req,res)=>{
        req.session.destroy();
        if(req.cookies.userPetshop){
            res.cookie('userPetshop', "", { maxAge: -1 });
        }
        res.redirect('/');    
    },
   
    profile:(req, res)=>{
        res.render('users/profile',{
            session: req.session,      
        });
    }
}

module.exports = usersController