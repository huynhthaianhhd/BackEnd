'use strict';

import bcrypt from 'bcryptjs';
import { pick } from 'utils/common';
const { Model, Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Role, {
        through: 'UserRoles',
        foreignKey: {
          name: 'userId',
        },
      });
    }
  }

  User.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncrement: false,
      },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      avatar: {
        type: DataTypes.STRING,
        defaultValue:
          'https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png',
      },
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      isBlocked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  );

  User.addHook('beforeSave', async function (user) {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, 12);
    }
  });

  User.isEmailTaken = async function (email, excludeUserId = null) {
    const user = await this.findOne({
      where: {
        [Op.and]: [
          { email },
          {
            id: {
              [Op.ne]: excludeUserId,
            },
          },
        ],
      },
    });
    return !!user;
  };
  User.prototype.isPasswordMatch = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  User.prototype.transform = function () {
    const fields = ['id', 'email', 'name', 'avatar', 'country', 'phone'];
    return pick(this, fields);
  };

  return User;
};
