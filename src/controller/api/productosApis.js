
const db = require("../../database/models")

module.exports = {
         products:async(req,res)=>{
           
try {

let url = `http://${req.headers.host}${req.originalUrl}`
if(url.includes("pages") && !url.includes("size")){
  throw new SyntaxError("dato incorrecto")
  
}
// capturo del objecto todos los parametros que no van a ir dentro where
const {page,size, orderBy,orderDirect , ...updateQuery}= req.query

// preguntamos si estan ordernado o si no lo ordenamos por a id
const order = orderBy ? orderBy : "id";
const direct = orderDirect ? orderDirect: "ABC";
// console.log(req.query);
//   console.log(updateQuery); 


// filtramos en el updateQuery para que no vaya vacio al where
for (let key in updateQuery) {
    if(updateQuery[key] == null || updateQuery[key].trim().length == 0 ){
    delete updateQuery[key]

  }
 
if(key == "name" && updateQuery[key]!= undefined){
  updateQuery[key] = {[op.substring]: req.query.name}
 }
}

  const getPagination = (page,size) =>{
    const limit = size ? +size : 5;
    const offset = page ? page * limit : 0;
       return {limit,offset}
   }
   const {limit,offset} =getPagination(page,size) 






// vamos a utilizar el objecto que viene desde la query
// para filtrarlo en la peticion del where
   let data = await Product.findAndCountAll({
     where:{
      
     },
     order:[{order,direct}] ,
     limit: limit,
     offset : offset
   })
   console.log(data);
  
} catch (error) {
  
  return res.status(500).json({
    msg:"lo siento ocurrio un error "
  })
}

          
          
         },
         categories:(req,res)=>{
               db.Category.findAll()
               .then(result=>{
                 res.json(result)
               }).catch((err) => {
                  console.log(err); 
               })
         },
         category:(req,res)=>{
             db.Subcategory.findAll({
              where:{idcategory:req.params.id}

             }).then(result=>{
                 console.log(result)
                   res.json(result)

             }).catch(error=>{
                 console.log(error);
             })

         },


// todas las categorias
categories:async(req,res)=>{

  try {
   let response = await fetch('http://localhost:3000/category/');
   json = await response.json();

     res.json(response)
    

   console.log(json)

  } catch (error) {
      
  }


 }





}