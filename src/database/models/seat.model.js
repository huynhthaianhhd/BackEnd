'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      this.belongsTo(models.Cinema, {
        as: 'cinema',
        foreignKey: 'cinemaId',
      });
      this.hasOne(models.Transaction, {
        as: 'transaction',
        foreignKey: 'seatId',
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
      modelName: 'Seat',
    },
  );
  return Seat;
};
