let productController = {

    home:(req, res)=>{
        res.render('admin/products/home',{title:"home"})

    },
    detail:(req, res)=>{
        res.render('admin/products/productDetail',{title:"productDetail"})

    },
    carrito:(req, res)=>{
        res.render('admin/products/carrito',{title:"carrito"})

    },
    listProduct:(req, res)=>{
        res.render('admin/products/listadoProductos',{title:"carrito"})

    },
}

module.exports = productController