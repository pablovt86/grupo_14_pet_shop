let productController = {

    home:(req, res)=>{
        res.render('products/home',{title:"home"})

    },
    detail:(req, res)=>{
        res.render('products/productDetail',{title:"productDetail"})

    }
}

module.exports = productController