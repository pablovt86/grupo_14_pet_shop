
const {users, writeUsersJson} = require('../data/dataBase')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt');


let usersController = {

    register: (req, res) => {
        res.render('users/register', {
            session: req.session,
            title:"register"
        })
    },
    processRegister: (req, res) => {
        // guarda los errores en una variable
        let errors = validationResult(req);
    //pregunto si no hhay errores procceso todo el objecto
        if(errors.isEmpty()){
            // creo la variable en con id en 1
            let lastId = 1;
// recorro todo el array de usuario y pregunto si el id que viene del array
// es mayor  al que viene por parametro si es haci
//guardo es valor en lastId
            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            });
// desctructoro la propiedades del objecto que viene por el body
            let { name, last_name, email, pass1 } = req.body
// creo un nuevo objecto con lo que viene por el body
            let newUser = {
                id: lastId + 1,
                name,
                last_name,
                email, 
                pass: pass1,
                avatar: req.file ? req.file.filename : "default-image.png",
                rol: "ROL_USER",
                tel: "",
                province: ""
            }
// al array de usuario le agrego a lo ultimo el objecto creado 
            users.push(newUser)
// parseo y strigifico el array a objecto
            writeUsersJson(users)
// redirigo a la vista de login si no hay errores
            res.redirect('/users/login')

        }else{
            res.render('users/register', {
                errors: errors.mapped(),
                session: req.session,
                title:"register"
            })
        }
    },
    login:(req, res)=>{
        res.render('users/login',{title:"login",
        session: req.session
    })

    }, 
    processLogin: (req, res) => {
        let errors = validationResult(req);
       
        if(errors.isEmpty()){
            let user = users.find(user => user.email === req.body.email);
           
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

        }else{
            res.render('users/login', {
                errors: errors.mapped(),
                session: req.session,
                title:"login"
            })
        }
    },
  
   
    profile:(req, res)=>{
        res.render('users/profile',{title:"carrito"})

    }
}

module.exports = usersController