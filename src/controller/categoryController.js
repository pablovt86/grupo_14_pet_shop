const db = require('../database/models');
// const { Op } = require('sequelize');

module.exports ={
all:(req,res)=>{   
 db.Category.findOne({
        where:{
            idcategory:req.params.id
        }
    }).then((result) => {
        
      db.Subcategory.findAll({
          where:{       
      idcategory:result.idcategory
          }
    }).then((response)=>{
        let categ = [];
        for (let i = 0; i < response.length; i++) {
             categ.push(response[i]);
        }
      subcart =[]
     categ.forEach(element => {
         subcart.push(element.idsubcategory)
    });
        db.Product.findAll({
            include: [{association: 'product_images'}],
            where: {
                idsubcategory: subcart
            }
              
        }).then((add)=>{
            res.render('admin/categories/categoriesAll',{
               categories:response,
               products:add,
               title:"Categorias",
               session:req.session,
               query:req.params.id
                
            })


        })

    })
    })
}
} 
