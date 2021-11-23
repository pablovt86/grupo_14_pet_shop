let usersController = {

    register:(req, res)=>{
        res.render('users/register')

    },
    login:(req, res)=>{
        res.render('users/login')

    },
    carrito:(req, res)=>{
        res.render('users/carrito')

    }
}

module.exports = usersController