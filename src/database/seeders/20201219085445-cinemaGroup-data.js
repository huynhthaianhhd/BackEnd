'use strict';

const fakeData = require('./fakeData');

const { cinemaGroups } = fakeData;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('GroupCinemas', [...cinemaGroups], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('GroupCinemas', null, {});
  },
};
