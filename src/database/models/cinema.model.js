'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    static associate(models) {}
  }

  Cinema.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: false,
      },
      idGroup: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'GroupCinema',
          key: 'id',
        },
      },
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      description: DataTypes.TEXT,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Cinema',
    },
  );
  return Cinema;
};
