
const {getUsuarios} = require('../data/dataBase')

let usersController = {

    register:(req, res)=>{


        res.render('users/register',{title:"register"})

    },
    login:(req, res)=>{
        res.render('users/login',{title:"login"})

    }, 
   
    profile:(req, res)=>{
        res.render('users/profile',{title:"carrito"})

    }
}

module.exports = usersController