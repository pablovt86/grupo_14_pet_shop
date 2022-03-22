module.exports = (Sequelize, dataTypes)=>{
    const alias = 'Cart';

    const cols = {
        idcart: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        idorder: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        idproducts: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        iduser: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        quantity: {
            type: dataTypes.BIGINT(12),
            allowNull: false
        }
       
    };

    const config = {
        tableName: 'cart',
        createdAt: 'created_at',
        updatedAt: 'update_at'
        
    }

    const Cart = Sequelize.define(alias, cols, config);

    Cart.associate = (models)=>{
        Cart.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'idproducts'
        });
        Cart.belongsTo(models.Order, {
            as: 'order',
            foreignKey: 'idorder'
        });
    };

    return Cart;
}