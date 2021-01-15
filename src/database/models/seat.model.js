'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      this.belongsTo(models.Room, {
        as: 'room',
        foreignKey: 'roomId',
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
      roomId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Room',
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
