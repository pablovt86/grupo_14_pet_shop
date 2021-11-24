let usersController = {

    register:(req, res)=>{
        res.render('users/register',{title:"register"})

    },
    login:(req, res)=>{
        res.render('users/login',{title:"login"})

    },
    carrito:(req, res)=>{
        res.render('users/carrito',{title:"carrito"})

    }
}

module.exports = usersController