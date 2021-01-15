'use strict';

const fakeData = require('./fakeData');

const { movieReviews } = fakeData;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('MovieReviews', [...movieReviews], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('MovieReviews', null, {});
  },
};
