const { check } = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty()
    .withMessage('Complete con nombre, marca, etc...').bail()
    .isLength({ max: 45 })
    .withMessage('Máximo permitido 45 caracteres.'),

    check('price')
    .notEmpty()
    .withMessage('El producto necesita un precio.').bail()
    .isNumeric()    
    .withMessage('El valor debe ser numérico'),

    check('discount')
    .isNumeric()    
    .withMessage('El valor debe ser numérico'),

    check('description')
    .notEmpty()
    .withMessage('Incluya una breve descripción.')
    .isLength({ max: 255 })
    .withMessage('Máximo permitido 255 caracteres.'),

    check('category')
    .notEmpty()
    .withMessage('Elija una categoría'),

    check('subcategory')
    .notEmpty()
    .withMessage('Elija una subcategoría'),

    check('stock')
    .notEmpty()
    .withMessage('Debe ingresar cantidad de unidades.').bail()
    .isNumeric()    
    .withMessage('El valor debe ser numérico')
]