'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      // define association here
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
      director: DataTypes.STRING,
      description: DataTypes.STRING,
      duration: DataTypes.STRING,
      category: DataTypes.STRING,
      classify: DataTypes.STRING,
      casts: DataTypes.STRING,
      primereTime: DataTypes.DATE,
      language: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Movie',
    },
  );
  return Movie;
};
