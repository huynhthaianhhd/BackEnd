'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CinemaReview extends Model {
    static associate(models) {
      this.belongsTo(models.Cinema, {
        as: 'cinema',
        foreignKey: 'cinemaId',
      });
      this.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId',
      });
    }
  }

  CinemaReview.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: false,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'User',
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
      content: DataTypes.TEXT,
      rating: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'CinemaReview',
    },
  );
  return CinemaReview;
};
