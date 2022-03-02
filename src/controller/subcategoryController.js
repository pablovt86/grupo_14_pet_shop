const { products } = require('../database/dataBase');
const db = require('../database/models');

module.exports = {
  all:(req,res)=>{
    db.Subcategory.findOne({
        where:{       
           idsubcategory:req.params.id
        }
  }).then((response)=>{
      db.Product.findAll({
          include: [{association: 'product_images'}],
          where: {
              idsubcategory: response.idsubcategory
          }
        
          }).then((result) => {
              console.log();
           res.render("admin/subcategories/subcategoriesAll",{
               title:"subcategorias",
               session:req.session,
               products:result
           })   
           

          }).catch((err) => {
              console.log(err);
              
          });

      })

}


}