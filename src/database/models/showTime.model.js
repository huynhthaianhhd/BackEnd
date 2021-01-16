'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShowTime extends Model {
    static associate(models) {
      this.belongsTo(models.Cinema, {
        foreignKey: 'cinemaId',
        as: 'cinema',
      });
      this.belongsTo(models.Movie, {
        as: 'movie',
        foreignKey: 'movieId',
      });
    }
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
        references: {
          model: 'Movie',
          key: 'id',
        },
      },
      cinemaId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Cinema',
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
