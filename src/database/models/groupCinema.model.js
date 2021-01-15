'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GroupCinema extends Model {
    static associate(models) {
      // define association here
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
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'GroupCinema',
    },
  );
  return GroupCinema;
};
