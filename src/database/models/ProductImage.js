module.exports = (Sequelize, dataTypes)=>{
    const alias = 'ProductImage';

    const cols = {
        idproduct_images: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        images: {
            type: dataTypes.STRING(70),
            allowNull: false
        },

        idproducts: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        tableName: 'product_images',
        timestamps: false
    };

    const ProductImage = Sequelize.define(alias, cols, config);

    ProductImage.associate = (models)=>{
        ProductImage.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'idproducts'
        });
    };

    return ProductImage;
}