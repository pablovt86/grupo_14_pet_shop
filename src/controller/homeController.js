let controller = {
    index: (req, res) => {
        let titulo = "Bienvenidos a Fatiga Pet Shop";
        res.render('home', {titulo});
    }
}

module.exports = controller;