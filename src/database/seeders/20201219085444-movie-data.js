'use strict';

const fakeData = require('./fakeData');

const { movies } = fakeData;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Movies', [...movies], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Movies', null, {});
  },
};
