const faker = require('faker');

const cinemaGroupUrls = [
  'https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png',
  'https://static.mservice.io/placebrand/s/momo-upload-api-190709165424-636982880641515855.jpg',
  'https://s3img.vcdn.vn/123phim/2018/09/9b240f96a233bb43203ee514a21a6004.png',
  'https://s3img.vcdn.vn/123phim/2018/09/7b078639bd8fdb09dd83652d207c7b90.png',
  'https://s3img.vcdn.vn/123phim/2018/09/404b8c4b80d77732e7426cdb7e24be20.png',
];

const moviePosterUrls = [
  'https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/captain-marvel-epic-61x91-5cm-movie-poster-31596-1-p.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._AC_SL1178_.jpg',
  'https://i.pinimg.com/originals/bc/d5/c9/bcd5c9519581acc60bd60a429ab0c88f.jpg',
  'https://cdn.seat42f.com/wp-content/uploads/2020/07/15192015/Project-Power-Movie-Poster-Jamie-Foxx.jpg',
  'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/91WNnQZdybL._AC_SL1500_.jpg',
  'https://cdnb.artstation.com/p/assets/images/images/017/317/689/large/toan-juno-final.jpg?1555483923',
  'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2',
  'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg?ts=1573101130',
  'https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg',
  'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/star-wars-last-jedi-poster.jpg',
  'https://upload.wikimedia.org/wikipedia/vi/9/94/Pinocchio_%282019_movie%29_poster.jpeg',
  'https://smashinghub.com/wp-content/uploads/2012/06/Use-AIDA-Formula.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/71zaL8t0qgL._AC_SL1406_.jpg',
];

// Get date from to
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
  avatar: faker.random.image({
    width: 50,
    height: 50,
  }),
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
  trailerUrl: 'https://www.youtube.com/embed/THXPCF6UHh8',
  posterUrl: faker.random.arrayElement(moviePosterUrls),
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
const cinemaGroups = [...Array(5)].map((_, index) => ({
  id: faker.random.uuid(),
  logo: cinemaGroupUrls[index],
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
