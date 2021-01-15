'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      this.belongsTo(models.Room, {
        as: 'cinema',
        foreignKey: 'cinemaId',
      });
    }
  }

  Seat.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: false,
      },
      cinemaId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Cinema',
          key: 'id',
        },
      },
      row: DataTypes.INTEGER,
      no: DataTypes.INTEGER,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Seat',
    },
  );
  return Seat;
};
