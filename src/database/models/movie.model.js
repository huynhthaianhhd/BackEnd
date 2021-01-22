'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      this.belongsToMany(models.Cinema, {
        through: models.ShowTime,
        foreignKey: 'movieId',
        as: 'cinemas',
      });
      this.hasMany(models.ShowTime, {
        foreignKey: 'movieId',
        as: 'showTimes',
      });
      this.hasMany(models.MovieReview, {
        foreignKey: 'movieId',
        as: 'movieReviews',
      });
    }
  }

  Movie.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: false,
      },
      name: DataTypes.STRING,
      trailerUrl: DataTypes.STRING,
      posterUrl: DataTypes.STRING,
      director: DataTypes.STRING,
      description: DataTypes.TEXT,
      duration: DataTypes.STRING,
      category: DataTypes.STRING,
      classify: DataTypes.STRING,
      casts: DataTypes.ARRAY(DataTypes.STRING),
      premiereTime: DataTypes.DATE,
      language: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Movie',
    },
  );
  return Movie;
};
