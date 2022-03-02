module.exports = (Sequelize, dataTypes)=>{
    const alias = 'Subcategory';

    const cols = {
        idsubcategory: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        idcategory: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        idproducts: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    
    const config = {
        tableName: 'subcategory',
        timestamps: false
    };

    const Subcategory = Sequelize.define(alias, cols, config);

    Subcategory.associate = (models)=>{
        Subcategory.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'idcategory'
        });

        Subcategory.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'idsubcategory'
        });
    };

    return Subcategory;
}