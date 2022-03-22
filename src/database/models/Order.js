
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
        createdAt: 'creadted_at',
        updatedAt: 'update_at'
    };

    const Order = Sequelize.define(alias, cols, config);

    Order.associate = (models)=>{
        Order.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'idorder',
            onDelete : 'cascade',

        });
    };

    return Order;
}

