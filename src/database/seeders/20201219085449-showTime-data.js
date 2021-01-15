'use strict';

const fakeData = require('./fakeData');

const { showTimes } = fakeData;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('ShowTimes', [...showTimes], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ShowTimes', null, {});
  },
};
