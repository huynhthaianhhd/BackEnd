'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: {
        type: Sequelize.STRING,
      },
      trailerUrl: {
        type: Sequelize.STRING,
      },
      posterUrl: {
        type: Sequelize.STRING,
      },
      director: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      duration: {
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.STRING,
      },
      classify: {
        type: Sequelize.STRING,
      },
      casts: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      premiereTime: {
        type: Sequelize.DATE,
      },
      language: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Movies');
  },
};
