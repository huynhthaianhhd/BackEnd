'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.belongsToMany(models.User, {
        through: 'UserRoles',
        foreignKey: {
          name: 'roleId',
        },
      });
    }
  }

  Role.init(
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
      modelName: 'Role',
    },
  );

  Role.findRoleIdByName = async function (name) {
    const role = await this.findOne({
      where: {
        name,
      },
    });
    return role.id;
  };
  return Role;
};
