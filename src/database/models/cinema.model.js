'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    static associate(models) {
      this.belongsTo(models.GroupCinema, {
        as: 'groupCinema',
        foreignKey: 'idGroup',
      });
    }
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
      description: DataTypes.STRING,
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: 'Cinema',
    },
  );
  return Cinema;
};
