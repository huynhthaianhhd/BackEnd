'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ShowTimes', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      movieId: {
        type: Sequelize.UUID,
        references: {
          model: 'Movies',
          key: 'id',
        },
      },
      cinemaId: {
        type: Sequelize.UUID,
        references: {
          model: 'Cinemas',
          key: 'id',
        },
      },
      startTime: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('ShowTimes');
  },
};
