import { Role, User, UserRole } from 'database/models';
import { paginate } from 'utils/sequelize';
import httpStatus from 'http-status';
import ApiError from 'utils/ApiError';
import { ROLES } from 'utils/constants';

const userService = {};

userService.getUserByEmail = async (email) => {
  return await User.findOne({
    where: {
      email,
    },
  });
};

userService.getUserById = async (id) => {
  return await User.findOne({
    attributes: {
      exclude: ['password'],
    },
    where: {
      id,
    },
  });
};

userService.updateUserById = async (fields, id) => {
  return await User.update(fields, {
    where: {
      id,
    },
  });
};

userService.createUser = async (userBody) => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  const user = await User.create(userBody);
  const roleId = await Role.findRoleIdByName(ROLES.MEMBER);
  await UserRole.create({ userId: user.id, roleId });
  return user;
};

userService.getRolesFromId = async (id) => {
  const user = await User.findOne({
    include: {
      model: Role,
    },
    where: {
      id,
    },
  });
  const roles = user.Roles.map((role) => role.name);
  return roles;
};

userService.getMany = async (query) => {
  const { page, perPage } = query;
  const users = await User.findAndCountAll({
    attributes: {
      exclude: ['id', 'password'],
    },
    raw: true,
    nest: true,
    ...paginate({ page, perPage }),
  });

  return users;
};

export default userService;
