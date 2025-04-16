'use strict';
 
 module.exports = {
   async up(queryInterface, Sequelize) {
     await queryInterface.createTable('product_images', {
       idproduct_images: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true
       },
       images: {
         type: Sequelize.STRING,
         allowNull: false
       },
       idproducts: {
         type: Sequelize.INTEGER,
         allowNull: false,
         references: {
           model: 'products',
           key: 'idproducts'
         },
         onUpdate: 'CASCADE',
         onDelete: 'CASCADE'
       },
       createdAt: {
         allowNull: false,
         type: Sequelize.DATE,
         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
       },
       updatedAt: {
         allowNull: false,
         type: Sequelize.DATE,
         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
       }
     });
   },
 
   async down(queryInterface, Sequelize) {
     await queryInterface.dropTable('product_images');
   }
 };
