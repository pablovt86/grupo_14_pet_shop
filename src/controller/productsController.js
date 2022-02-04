let {products, subcategories} = require('../database/dataBase');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');

let productController = {

    home:(req, res)=>{
        let images = db.ProductImage.findAll()

        let productsInSale = db.Product.findAll({
            where:{
                discount:{[Op.gte] : 15}
            }
        })
        Promise.all([productsInSale,images])
        .then(([productsInSale,images]) => { 
             console.log(images);    
        res.render('admin/products/home', {
            sliderTitle: "Novedades",
            sliderProducts: productsInSale,
            title:"home",
            images,
            session: req.session
        })
    })
    },
    
    list:(req,res)=>{
        let products = db.Product.findAll({
            limit:8

        }
        );
        let subcategories = db.Subcategory.findAll({       
         limit : 8        });
        let images = db.ProductImage.findAll({
            limit:8

        });
        let category = db.Category.findAll();
        Promise.all([products,subcategories,images,category])
        .then(([products, subcategories,images,category]) => {
            res.render('admin/products/listadoProductos', {
               listProduct :products,
                images,
                session: req.session,
                subcategories,
                category,
                title:"listado de Productos"
            });
        }) 


    },



    detail:(req, res)=>{
        res.render('admin/products/productDetail',{session: req.session});

    },

    carrito:(req, res)=>{
        res.render('users/carrito',{session: req.session});

    },
  
    search:function(req,res){
        let search = req.query.searchHome.toLowerCase().trim();
        let resultados = products.filter(product=> product.name.toLowerCase().trim().includes(search))
        // res.send(resultados)
        res.render('admin/products/searchAdmin',{
            resultados,
            title:"resultado de busqueda",
            search
           
        })
        
        }
}

module.exports = productController