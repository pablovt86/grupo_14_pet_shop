const { check, body } = require('express-validator');

module.exports = [
    check('nombre')
    .notEmpty()
    .withMessage('Complete con nombre, marca, etc...').bail()
    .isLength({ min:10, max: 45 })
    .withMessage('Complete con nombre, marca, etc entre 10 y 45 caracteres.'),

    check('price')
    .notEmpty()
    .withMessage('El producto necesita un precio.').bail()
    .isNumeric()    
    .withMessage('El valor debe ser numérico'),

    body('discount')
    .custom((value) => {
        if (value) {
            if (isNaN(value)) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    })
    .withMessage('El valor debe ser numérico.'),

    check('description')
    .notEmpty()
    .withMessage('Incluya una breve descripción.')
    .isLength({ max: 255 })
    .withMessage('Máximo permitido 255 caracteres.'),

    check('category')
    .notEmpty()
    .withMessage('Elija una categoría.'),

    check('subcategory')
    .notEmpty()
    .withMessage('Elija una subcategoría.'),

    check('stock')
    .notEmpty()
    .withMessage('Debe ingresar cantidad de unidades.').bail()
    .isNumeric()    
    .withMessage('El valor debe ser numérico.')
]