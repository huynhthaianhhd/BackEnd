'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GroupCinema extends Model {
    static associate(models) {
      // define association here
      this.hasMany(models.Cinema, {
        as: 'cinemas',
        foreignKey: 'idGroup',
      });
    }
  }

  GroupCinema.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: false,
      },
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'GroupCinema',
    },
  );
  return GroupCinema;
};
