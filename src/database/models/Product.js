module.exports = (Sequelize, dataTypes)=>{
    const alias = 'Product';

    const cols = {
        idproducts: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        nombre: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },

        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        discount: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        estado: {
            type: dataTypes.STRING(20),
            allowNull: false
        },

        idsubcategory: {
            type: dataTypes.INTEGER,
            allowNull:false
        }
    };

    const config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = Sequelize.define(alias, cols, config);

    Product.associate = (models)=>{
        Product.belongsTo(models.Subcategory, {
            as: 'subcategory',
            foreignKey: 'idsubcategory'
        });

        Product.hasMany(models.ProductImage, {
            as: 'product_images',
            foreignKey: 'idproducts'
        });

        Product.hasMany(models.OrderItem, {
            as: 'order_items',
            foreignKey: 'idproducts'
        });
    };

    return Product;
}