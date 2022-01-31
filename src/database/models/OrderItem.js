module.exports = (Sequelize, dataTypes)=>{
    const alias = 'OrderItem';

    const cols = {
        idorder_items: {
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

        quantity: {
            type: dataTypes.BIGINT(12),
            allowNull: false
        }
    };

    const config = {
        tableName: 'order_items',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        
    }

    const OrderItem = Sequelize.define(alias, cols, config);

    OrderItem.associate = (models)=>{
        OrderItem.belongsTo(models.Order, {
            as: 'order',
            foreignKey: 'idorder'
        });

        OrderItem.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'idproducts'
        });
    };

    return OrderItem;
}