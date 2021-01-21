'use strict';

const fakeData = require('./fakeData');

const { cinemaReviews } = fakeData;

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('CinemaReviews', [...cinemaReviews], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('CinemaReviews', null, {});
  },
};
