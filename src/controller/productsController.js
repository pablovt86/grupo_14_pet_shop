let {products, subcategories} = require('../database/dataBase');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');


let productController = {

    home:(req, res)=>{
        let images = db.ProductImage.findAll()
        let categories = db.Category.findAll();


        let productsInSale = db.Product.findAll({
            where:{
                discount:{[Op.gte] : 15}
            }
        })
        Promise.all([productsInSale,images,categories])
        .then(([productsInSale,images,categories]) => { 
        res.render('admin/products/home', {
            sliderTitle: "PROMOCIONES",
            sliderProducts: productsInSale,
            title:"home",
            images,
            categories,
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



    detail: (req, res) => {
       db.Product.findOne({
            where: {
                idproducts: req.params.id,
            },
            include: [{association: 'product_images'}]
        })
        .then(((product) => {
        
           db.Product.findAll({
                include: [{association: 'product_images'}],
                where: {
                    idsubcategory: product.idsubcategory
                }
            })
            .then((relatedProducts) => {
                res.render('admin/products/productDetail', {
                    product,
                    title: "Productos relacionados",
                    sliderProducts: relatedProducts,
                    session: req.session
                })
            }).catch((error) => {console.log(error)});
   
        }))
    },
            

              
            

    

    carrito:(req, res)=>{
        res.render('users/carrito',{session: req.session});

    },
  
    search: (req, res) => {
        db.Product.findAll({
            where: {
                nombre: {
                    [Op.substring]: req.query.searchAdmin
                }
            },
            include: [{association: 'product_images'}]
        })
        .then((resultados) => {

            db.Subcategory.findAll({
                include: [{association: 'category'}],
               
            }).then((subcategories)=>{
                res.render('admin/products/searchAdmin', {
                    resultados,
                    search: req.query.searchAdmin,
                    subcategories,
                    session: req.session
                })

            })
            
        
        })
        .catch((error) => {console.log(error)});
    }
}

module.exports = productController