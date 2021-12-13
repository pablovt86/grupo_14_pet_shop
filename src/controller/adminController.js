const {getProductos} = require('../data/dataBase')
let controller = {
    index: function(req, res){
        let title = 'Panel de administrador';
        res.render('admin/administrador.ejs', {title,
            productos:getProductos
        });
    },

    agregar: function(req, res){
        let productId = +req.params.id;
        let productos = getProductos.find(product => product.id == productId)

        res.render('admin/agregarProducto.ejs', {
            title:'Guardar nuevo producto',
            productos
        
        });
    },

    actualizar: function(req, res){
        let title = 'Actualizar producto';
        res.render('admin/actualizarProducto.ejs', {title});
    }
}

module.exports = controller;