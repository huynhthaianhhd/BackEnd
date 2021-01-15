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
      description: DataTypes.TEXT,
      duration: DataTypes.STRING,
      category: DataTypes.STRING,
      classify: DataTypes.STRING,
      casts: DataTypes.STRING,
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
