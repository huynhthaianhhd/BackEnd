const faker = require('faker');

//date from to
let mom = function (from, to) {
  const fromMilli = Date.parse(from);
  const dateOffset = faker.random.number(Date.parse(to) - fromMilli);

  const newDate = new Date(fromMilli + dateOffset);

  return newDate;
};
// Default password: 123132
const defaultPassword =
  '$2a$12$VvWghIAnvkFgVG1hZ6OGyeaDtEPKGxZYmEu9PExiuke2WCDS5Fywe';

// Fake 2 role ids for member, admin
const roleIds = {
  member: faker.random.uuid(),
  admin: faker.random.uuid(),
};

// Fake 50 members
const members = [...Array(50)].map(() => ({
  id: faker.random.uuid(),
  email: faker.internet.email(),
  password: defaultPassword,
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  address: faker.address.streetAddress(),
  avatar:
    'https://www.alliancerehabmed.com/wp-content/uploads/icon-avatar-default.png',
  phone: faker.phone.phoneNumber(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

// Set role for 50 members
const memberRoles = members
  .map((member) => member.id)
  .map((id) => ({
    userId: id,
    roleId: roleIds.member,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));

// Fake 50 movies
const movies = [...Array(50)].map(() => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  director: `${faker.name.firstName()} ${faker.name.lastName()}`,
  description: faker.lorem.paragraph(),
  trailerUrl: 'https://www.youtube.com/embed/XW2E2Fnh52w',
  posterUrl:
    'https://img.moviepostershop.com/replicas-movie-poster-2019-1010778791.jpg',
  duration: faker.random.number({
    min: 60,
    max: 180,
  }),
  category: faker.random.word(),
  classify: 'P',
  casts: [
    ...Array(
      faker.random.number({
        min: 1,
        max: 5,
      }),
    ),
  ].map(() => `${faker.name.firstName()} ${faker.name.lastName()}`),
  premiereTime: faker.date.past(),
  language: faker.address.country(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

// Fake 5 cinema groups
const cinemaGroups = [...Array(5)].map(() => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

// Fake 25 cinemas (5 cinemas per cinema group)
const cinemas = cinemaGroups
  .map((group) => {
    return [...Array(5)].map(() => ({
      id: faker.random.uuid(),
      idGroup: group.id,
      name: faker.commerce.productName(),
      location: faker.address.streetAddress(),
      description: faker.lorem.paragraph(),
      phone: faker.phone.phoneNumber(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  })
  .reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, []);

// Fake 1250 seats (50 seats per cinema)
const seats = cinemas
  .map((cinema) => {
    return [...Array(5)].map((_, index) => {
      const row = String.fromCharCode(65 + index);
      const price = row >= 'C' && row <= 'D' ? 70 : 50;
      return [...Array(10)].map((_, index) => ({
        row,
        price,
        id: faker.random.uuid(),
        cinemaId: cinema.id,
        no: index + 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
    });
  })
  .reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, [])
  .reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, []);

// Fake 300 show times
const showTimes = [...Array(500)].map(() => ({
  id: faker.random.uuid(),
  movieId:
    movies[
      faker.random.number({
        min: 0,
        max: 49,
      })
    ].id,
  cinemaId:
    cinemas[
      faker.random.number({
        min: 0,
        max: 24,
      })
    ].id,
  startTime: mom(Date(), '2021-01-29'),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

// Fake 900 transactions
const transactions = [...Array(900)].map(() => ({
  id: faker.random.uuid(),
  userId:
    members[
      faker.random.number({
        min: 0,
        max: 49,
      })
    ].id,
  showTimeId:
    showTimes[
      faker.random.number({
        min: 0,
        max: 299,
      })
    ].id,
  seatId:
    seats[
      faker.random.number({
        min: 0,
        max: 1249,
      })
    ].id,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

// Fake 200 movie reviews
const movieReviews = [...Array(200)].map(() => ({
  id: faker.random.uuid(),
  userId:
    members[
      faker.random.number({
        min: 0,
        max: 49,
      })
    ].id,
  content: faker.lorem.paragraph(),
  rating: faker.random.number({
    min: 1,
    max: 5,
  }),
  movieId:
    movies[
      faker.random.number({
        min: 0,
        max: 49,
      })
    ].id,
  createdAt: new Date(),
  updatedAt: new Date(),
}));

module.exports = {
  defaultPassword,
  roleIds,
  members,
  memberRoles,
  movies,
  cinemaGroups,
  cinemas,
  seats,
  showTimes,
  transactions,
  movieReviews,
  up: () => Promise.resolve(),
  down: () => Promise.resolve(),
};
