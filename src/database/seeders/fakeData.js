const faker = require('faker');

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
  avatar: faker.internet.avatar(),
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

// Fake 100 movies
const movies = [...Array(100)].map(() => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  email: faker.internet.email(),
  password: defaultPassword,
  director: `${faker.name.firstName()} ${faker.name.lastName()}`,
  description: faker.lorem.paragraph(),
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

// Fake 5 cinemas per cinema group
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

// Fake 5 rooms per cinema
const rooms = cinemas
  .map((cinema) => {
    return [...Array(5)].map(() => ({
      id: faker.random.uuid(),
      cinemaId: cinema.id,
      name: faker.commerce.productName(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  })
  .reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, []);

// Fake 50 seats per room
const seats = rooms
  .map((room) => {
    return [...Array(50)].map(() => ({
      id: faker.random.uuid(),
      roomId: room.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  })
  .reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, []);

// Fake show times
const showTimes = movies
  .map((movie) => {
    const showTimeObjects = seats.map((seat) => ({ seatId: seat.id }));
    return Object.values(showTimeObjects).map((showTime) => ({
      ...showTime,
      id: faker.random.uuid(),
      movieId: movie.id,
      startTime: faker.date.future(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  })
  .reduce((acc, curr) => {
    acc.push(...curr);
    return acc;
  }, []);

// Fake 50 transactions
const transactions = [...Array(50)].map((_, index) => ({
  id: faker.random.uuid(),
  userId: members[index].id,
  showTimeId: showTimes[index].id,
  paymentDate: faker.date.past(),
  createdAt: new Date(),
  updatedAt: new Date(),
}));

// Fake movie reviews
const movieReviews = [...Array(100)].map(() => ({
  id: faker.random.uuid(),
  userId:
    members[
      faker.random({
        min: 0,
        max: 49,
      })
    ].id,
  content: faker.lorem.paragraph(),
  rating: faker.random({
    min: 0,
    max: 5,
  }),
  movieId:
    movies[
      faker.random({
        min: 0,
        max: 99,
      })
    ].id,
}));

module.exports = {
  defaultPassword,
  roleIds,
  members,
  memberRoles,
  movies,
  cinemaGroups,
  cinemas,
  rooms,
  seats,
  showTimes,
  transactions,
  movieReviews,
  up: () => Promise.resolve(),
  down: () => Promise.resolve(),
};
