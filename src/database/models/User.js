module.exports = (Sequelize, dataTypes)=>{
    const alias ='User';

    const cols = {
        idusers: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        last_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        password: {
            type: dataTypes.STRING(200),
            allowNull: false
        },

        rol: {
            type: dataTypes.STRING(45),
            allowNull: false
        },

        avatar: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
    };

    const config = {
        tableName: 'users',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    };

    const User = Sequelize.define(alias, cols, config);

    User.associate = (models)=>{
        User.hasOne(models.Order, {
            as: 'order',
            foreignKey: 'idusers'
        });
    };

    return User;
}