let controller = {
    index: function(req, res){
        let title = 'Panel de administrador';
        res.render('admin/main-admin.ejs', {title});
    },

    agregar: function(req, res){
        let title = 'Guardar nuevo producto';
        res.render('admin/product-create-form.ejs', {title});
    },

    actualizar: function(req, res){
        let title = 'Actualizar producto';
        res.render('admin/product-edit-form.ejs', {title});
    }
}

module.exports = controller;