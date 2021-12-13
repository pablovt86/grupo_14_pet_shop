const fs = require('fs')

module.exports = {

    getUsuarios : JSON.parse(fs.readFileSync('./src/data/usuarios.json', 'utf-8')),
    getProductos:JSON.parse(fs.readFileSync('./src/data/productos.json' , 'utf-8')),
writeJson : (dataBase) =>  {
    fs.writeFileSync('./src/data/usuarios.json',JSON.stringify(dataBase))
}

}