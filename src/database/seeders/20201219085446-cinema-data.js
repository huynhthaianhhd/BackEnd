'use strict';

const fakeData = require('./fakeData');

const { cinemas } = fakeData;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Cinemas', [...cinemas], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Cinemas', null, {});
  },
};
