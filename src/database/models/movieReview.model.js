'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MovieReview extends Model {
    static associate(models) {
      this.belongsTo(models.Movie, {
        as: 'movie',
        foreignKey: 'movieId',
      });
      this.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId',
      });
    }
  }

  MovieReview.init(
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
      movieId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'Movie',
          key: 'id',
        },
      },
      content: DataTypes.TEXT,
      rating: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'MovieReview',
    },
  );
  return MovieReview;
};
