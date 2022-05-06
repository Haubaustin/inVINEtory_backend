'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bottles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      winery: { 
        type: Sequelize.STRING,
      },
      region: {
        type: Sequelize.STRING,
      },
      vintage: {
        type: Sequelize.STRING
      },
      varietal: {
        type: Sequelize.STRING
      },
      still: {
        type: Sequelize.BOOLEAN
      },
      row: {
        type: Sequelize.INTEGER
      },
      column: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.TEXT
      },
      user_id: {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      storage_id: {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'storages',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bottles');
  }
};