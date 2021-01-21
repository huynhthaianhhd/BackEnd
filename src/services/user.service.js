import { Role, User, UserRole } from 'database/models';
import { paginate } from 'utils/sequelize';
import httpStatus from 'http-status';
import ApiError from 'utils/ApiError';
import { ROLES } from 'utils/constants';
import { Op } from 'sequelize';

const userService = {};

userService.getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
    include: {
      model: Role,
    },
  });
  user.roles = Object.values(user.Roles).map((item) => item.name);
  delete user.Roles;

  return user;
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

userService.getAllUsersExceptAdmin = async () => {
  // tất cả những users bao gồm admin
  let users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
    include: Role,
  });

  // chọn ra những users không có admin
  users = users.filter((user) => {
    for (let i = 0; i < user.Roles.length; i++) {
      if (user.Roles[i].name === 'admin') return false;
    }
    return true;
  });

  return users;
};

userService.blockAUser = async ({ userId }) => {
  await User.update(
    { isBlocked: true },
    {
      where: {
        id: userId,
      },
    },
  );
};

export default userService;
