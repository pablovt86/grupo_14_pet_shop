let productController = {

    home:(req, res)=>{
        res.render('products/home',{title:"home"})

    },
    detail:(req, res)=>{
        res.render('products/productDetail',{title:"productDetail"})

    },
    carrito:(req, res)=>{
        res.render('products/carrito',{title:"carrito"})

    },
    listProduct:(req, res)=>{
        res.render('products/listadoProductos',{title:"carrito"})

    },
}

module.exports = productController