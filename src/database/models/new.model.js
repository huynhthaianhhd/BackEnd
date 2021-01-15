'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId',
      });
    }
  }

  New.init(
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
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'New',
    },
  );
  return New;
};
