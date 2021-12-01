let controller = {
    index: function(req, res){
        let title = 'Panel de administrador';
        res.render('admin/administrador.ejs', {title});
    },

    agregar: function(req, res){
        let title = 'Guardar nuevo producto';
        res.render('admin/agregarProducto.ejs', {title});
    },

    actualizar: function(req, res){
        let title = 'Actualizar producto';
        res.render('admin/actualizarProducto.ejs', {title});
    }
}

module.exports = controller;