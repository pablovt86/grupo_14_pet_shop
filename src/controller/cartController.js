const db = require('../database/models');
const productVerify = (carrito, id) => {

    let index = -1;
    for (let i = 0; i < carrito.length; i++) {    
        
        console.log('>>>>>>>>>>>>>>>>><<',carrito[i])

        if(carrito[i].id === +id){
            index = i;
            break
        }
    }
    return index
}

module.exports = {
    show : async (req,res) => {
        if(!req.session.cart){
            return res.status(500).json({
                ok : false,
                msg : 'Comuníquese con el administrador!'
            })
        }
        let response = {
            ok: true,
            meta : {
                total : req.session.cart.length
            },
            data : req.session.cart
        }
        return res.status(200).json(response)
    },
    add : async (req,res) => {
        try {

            let product = await db.Product.findByPk(req.params.id,{
                include : [
                    {association : 'product_images',
                    }
                ]
            });
            
            let item = {
                id:product.idproducts,
                nombre:product.nombre,
                price:product.price,
                discount:product.discount,
                image : product.product_images[0].images,
                amount : 1,
                total : product.price
            }

            
            if(req.session.cart.length === 0){

                let order = await db.Order.create({
                    idusers : req.session.user.id,
                    state : 'pending'
                })
                item = {
                    ...item,
                    idorder: order.idorder
                }
                await db.Cart.create({
                    idorder: order.idorder,
                    idproducts: item.id,
                    quantity: 1,
                    iduser: order.idusers
                })

                req.session.cart.push(item)

            }else{

                let index = productVerify(req.session.cart,req.params.id);

                let order = await db.Order.findOne({
                    where : {
                        idusers : req.session.user.id,
                        state : 'pending'
                    }
                })

                if(index === -1){
                    item = {
                        ...item,
                        idorder : order.idorder
                    }
                    req.session.cart.push(item);
                    await db.Cart.create({
                        idorder: order.idorder,
                        idproducts: item.id,
                        quantity: 1,
                        iduser: order.idusers
                    })
                }else{

                    let product = req.session.cart[index];
                    product.amount++;
                    product.total = product.amount  * product.price;
                    req.session.cart[index] = product;

                    await db.Cart.update(
                        {
                            quantity : product.amount
                        },
                        {
                            where : {
                                idorder : product.idorder,
                                idproducts : product.id
                            }
                        }
                    )
                }
            }

            let response = {
                ok: true,
                meta : {
                    total : req.session.cart.length
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)

        }
    },
    remove : async (req,res) => {

        try {
            
            let index = productVerify(req.session.cart,req.params.id);
            let product = req.session.cart[index];

            if(product.amount > 1){

                product.amount--
                product.total = product.amount * product.price;
                req.session.cart[index] = product;

                await db.Cart.update(
                    {
                        quantity : product.amount
                    },
                    {
                        where : {
                            idorder : product.idorder,
                            idproducts : product.id
                        }
                    }
                )

            }else{

                req.session.cart.splice(index,1);

                await db.Cart.destroy({
                    where : {
                        idproducts : product.id,
                        idorder : product.idorder
                    }
                })

            }

            let response = {
                ok: true,
                meta : {
                    total : req.session.cart.length
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)

        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
    removeItem : async (req,res) => {

        try {

            let index = productVerify(req.session.cart,req.params.id);
            let product = req.session.cart[index]
            req.session.cart.splice(index,1);

            await db.Cart.destroy({
                where : {
                    idproducts : product.id,
                    idorder : product.idorder
                }
            })

            let response = {
                ok: true,
                meta : {
                    total : req.session.cart.length
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)

        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    },
    empty : async (req,res) => {

        try {

            await db.Order.destroy({
                where : {
                    idusers : req.session.user.id,
                    state : 'pending'
                }
            })

            req.session.cart = [];

            let response = {
                ok: true,
                meta : {
                    total : req.session.cart.length
                },
                data : req.session.cart
            }
    
            return res.status(200).json(response)
            
        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    } 

}