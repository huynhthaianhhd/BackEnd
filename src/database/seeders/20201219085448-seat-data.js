'use strict';

const fakeData = require('./fakeData');

const { seats } = fakeData;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Seats', [...seats], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Seats', null, {});
  },
};
