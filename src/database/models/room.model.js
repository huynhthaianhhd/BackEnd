'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate(models) {
      this.belongsTo(models.Cinema, {
        as: 'cinema',
        foreignKey: 'cinemaId',
      });
    }
  }

  Room.init(
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
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Room',
    },
  );
  return Room;
};
