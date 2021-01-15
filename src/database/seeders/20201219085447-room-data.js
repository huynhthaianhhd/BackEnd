'use strict';

const fakeData = require('./fakeData');

const { rooms } = fakeData;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Rooms', [...rooms], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Rooms', null, {});
  },
};
