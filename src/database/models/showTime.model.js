'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShowTime extends Model {
    static associate(models) {}
  }

  ShowTime.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: false,
      },
      movieId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Movie',
          key: 'id',
        },
      },
      cinemaId: {
        type: DataTypes.UUID,
        references: {
          model: 'Cinemas',
          key: 'id',
        },
      },
      startTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'ShowTime',
    },
  );
  return ShowTime;
};
