'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      this.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
      this.belongsTo(models.ShowTime, {
        as: 'showTime',
        foreignKey: 'showTimeId',
      });
      this.belongsTo(models.Seat, {
        as: 'seat',
        foreignKey: 'seatId',
      });
    }
  }

  Transaction.init(
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
        primaryKey: true,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      showTimeId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'ShowTime',
          key: 'id',
        },
      },
      seatId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Seat',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Transaction',
    },
  );
  return Transaction;
};
