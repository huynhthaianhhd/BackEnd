'use strict';

const fakeData = require('./fakeData');

const { members, defaultPassword } = fakeData;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          id: '18e8afec-887c-418e-b419-d997b8e9cf6f',
          email: 'member@gmail.com',
          password: defaultPassword,
          name: 'Im Member',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '6f807670-2175-46b9-87f5-23925f30405e',
          email: 'admin@gmail.com',
          password: defaultPassword,
          name: 'Im Admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        ...members,
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
