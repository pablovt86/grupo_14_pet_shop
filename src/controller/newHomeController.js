const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require('sequelize');
const newHomeController = {
    home:(req, res)=>{
        let images = db.ProductImage.findAll()

        let productsInSale = db.Product.findAll({
            where:{
                discount:{[Op.gte] : 15}
            }
        })
        Promise.all([productsInSale,images])
        .then(([productsInSale,images]) => { 
        res.render('/', {
            sliderTitle: "PROMOCIONES",
            sliderProducts: productsInSale,
            title:"home",
            images,
            session: req.session
        })
    })
    
}
}

module.exports = newHomeController;
