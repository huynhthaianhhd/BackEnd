'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      userId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      showTimeId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: 'ShowTimes',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Transactions');
  },
};
