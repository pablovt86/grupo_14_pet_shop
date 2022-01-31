const User = require("./User");

module.exports = (Sequelize, dataTypes)=>{
    const alias = 'Order';

    const cols = {
        idorder: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        idusers: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        state: {
            type: dataTypes.STRING(45),
            allowNull: false
        }
    };

    const config = {
        tableName: 'order',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    };

    const Order = Sequelize.define(alias, cols, config);

    Order.associate = (models)=>{
        Order.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'idusers'
        });

        Order.hasMany(models.OrderItem, {
            as: 'order_items',
            foreignKey: 'idorder'
        });
    };

    return Order;
}