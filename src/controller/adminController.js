const path = require('path');
const { validationResult } = require('express-validator');
const fs = require('fs');
const db = require('../database/models');
const { products, subcategories } = require('../database/dataBase');
const { Op } = require('sequelize');
const { response } = require('express');

let controller = {
 products: (req, res) => {
let url = `http://${req.headers.host}${req.originalUrl}`;


const getPageData= (data,page,limit)=>{
const { count,rows:result} = data;
const pages = Math.ceil(count/limit);
const currentPage = page ? + page : 0;
let netx_page = "";
let previous_pages = "";
if(url.includes('page')){
    // buscar por string con expressiones regulares con url.search buscar los indices 
    // y despues replazar esa porcion de texto "url.replace"
    let page_params = url.substring(url.search(/page/i),url.search(/&/i))
  if(currentPage == 0){
      netx_page = url.replace(page_params, `page=${currentPage + 1}`)
  }else{
      previous_pages = url.replace(page_params, `page=${currentPage - 1}`)
    netx_page = url.replace(page_params, `page=${currentPage + 1}`)

    }


}else{
    netx_page = `${url}?page${currentPage + 1}&size=${limit}`
}
const next = page == (pages -1) ? null: netx_page;
const previous = currentPage == 0 ? null : previous_pages



// count-cantidad, pages-cantida de pagina currentPage-ubicacion de la pagina previous-pagina anterior next-pagina siguiente

return {count,pages , currentPage , previous, next,result}
}




const{page,size}= req.query





const getPagination = (page,size) =>{
 const limit = size ? +size : 5;
// le asignamos desde donde tiene que empezar la 
// pagina y lo multiplicamos por la cantidad de pagina 
 const offset = page ? page * limit : 0;
    return {limit,offset}
}
const {limit,offset} =getPagination(page,size) 



         db.Product.findAndCountAll({
   
           limit:limit,
           offset:offset  


        }).then(response =>{
            const data = getPageData(response,page,limit)

            let images = db.ProductImage.findAll();
            Promise.all([data, images])

           

            .then(([data,images]) => {
                res.render('admin/products/adminProducts', {
                        products:data.result,
                        images,
                               count:data.count,
                            pages: data.pages,
                            currentPage:data.currentPage,
                            previous:data.previous,
                            next:data.next,
                             session: req.session
                    
                 })

                // res.json({
                //         info :{
                //             count:data.count,
                //             pages: data.pages,
                //             currentPage:data.currentPage,
                //             previous:data.previous,
                //             next:data.next
                //         },
                //         result:data
                //     })
    
         
        });


        
       
      
        }) 
    },


    create: (req, res) => {
        let categories = db.Category.findAll();
        let subcategories = db.Subcategory.findAll();
        Promise.all([categories, subcategories])
        .then(([categories, subcategories]) => {
            res.render('admin/products/product-create-form', {
                categories,
                subcategories,
                session: req.session
            });  
        })
        .catch((error) => {console.log(error)});
    },

    store: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { nombre, price, discount, description, subcategory, stock } = req.body;
            db.Product.create({
                nombre,
                price,
                discount: discount ? discount : 0,
                description,
                idsubcategory: subcategory,
                stock,
                estado: 'activo'
            })
            .then((product) => {
                db.ProductImage.create({
                    images: req.file ? req.file.filename : 'default-image.png',
                    idproducts: product.idproducts
                })
                .then(() => {
                    res.redirect('/admin/products');
                });
            })
            .catch(error => console.log(error));
        } else {
            let categories = db.Category.findAll();
            let subcategories = db.Subcategory.findAll();
            Promise.all([categories, subcategories])
            .then(([categories, subcategories]) => {
                res.render('admin/products/product-create-form', {
                    categories,
                    subcategories,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session
                });
            })
            .catch(error => console.log(error));
        }
    },

    edit: (req, res) => {
        const product = db.Product.findByPk(req.params.id, {include: [{association: 'subcategory'}]});
        const categories = db.Category.findAll();
        const subcategories = db.Subcategory.findAll();
        Promise.all([product, categories, subcategories])
        .then(([product, categories, subcategories]) => {
            if (product.discount == 0) {
                product.discount = '';
            }
            res.render('admin/products/product-edit-form', {
                product,
                categories,      
                subcategories,
                session: req.session
            });
        })
        .catch((error) => {console.log(error)});
    },

    update: (req, res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const { nombre, price, discount, description, subcategory, stock } = req.body;
            db.Product.update({
                nombre,
                price,
                discount,
                description: description.trim(),
                idsubcategory: subcategory,
                stock,
                estado: 'activo'
            }, {where: {idproducts: req.params.id}})
            .then((result) => {
                db.ProductImage.findByPk(req.params.id)
                .then((image) => {
                    if (fs.existsSync(path.join(__dirname, '../../public/images/products/'), image.images)) {
                        if (image.images !== 'default-image.png') {
                            fs.unlinkSync(`${path.join(__dirname, '../../public/images/products/')}${image.images}`);    
                        }   
                    } else {
                        console.log('La imagen no existe.');
                    }     
                });
                db.ProductImage.update({
                    images: req.file ? req.file.filename : 'default-image.png',
                    idproducts: req.params.id
                }, {where: { idproducts: req.params.id}
                })
                .then(() => {
                    res.redirect('/admin/products')
                });
            })
            .catch((error) => {console.log(error)});
        } else {
            const product = db.Product.findByPk(req.params.id, {include: [{association: 'subcategory'}]});
            const categories = db.Category.findAll();
            const subcategories = db.Subcategory.findAll();
            Promise.all([product, categories, subcategories])
            .then(([product, categories, subcategories]) => {
                res.render('admin/products/product-edit-form', {
                    product,
                    categories,      
                    subcategories,
                    errors: errors.mapped(),
                    old: req.body,
                    session: req.session
                });
            })
            .catch((error) => {console.log(error)});
        }
    },

    delete: (req, res) => {
        db.ProductImage.findByPk(req.params.id)
        .then((image) => {
            if (fs.existsSync(path.join(__dirname, '../../public/images/products/'), image.images)) {
                if (image.images !== 'default-image.png') {
                    fs.unlinkSync(`${path.join(__dirname, '../../public/images/products/')}${image.images}`);    
                }   
            } else {
                console.log('La imagen no existe.');
            }
            db.ProductImage.destroy({
            where: {idproducts: req.params.id}})
            .then((result) => {
                db.Product.destroy({
                    where: {
                        idproducts: req.params.id
                    }
                })
                .then((result) => {res.redirect('/admin/products')})
                .catch((error) => {console.log(error)});
            })
            .catch((error) => {console.log(error)});
        })
        .catch((error) => {console.log(error)});
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
            db.Subcategory.findAll({include:[{association: 'category'}]})
            .then((subcategories) => {
                res.render('admin/products/searchAdmin', {
                    resultados,
                    subcategories,
                    search: req.query.searchAdmin,
                    session: req.session
                });
            })
            .catch((error) => {console.log(error)});
        })
        .catch((error) => {console.log(error)});
    }

}

module.exports = controller;