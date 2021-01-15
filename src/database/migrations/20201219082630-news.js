'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('News', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      content: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('News');
  },
};
