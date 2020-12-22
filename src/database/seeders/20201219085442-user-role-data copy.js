'use strict';

const fakeData = require('./fakeData');

const { memberRoles, roleIds } = fakeData;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'UserRoles',
      [
        {
          userId: '18e8afec-887c-418e-b419-d997b8e9cf6f',
          roleId: roleIds.member,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: '6f807670-2175-46b9-87f5-23925f30405e',
          roleId: roleIds.admin,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        ...memberRoles,
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('UserRoles', null, {});
  },
};
