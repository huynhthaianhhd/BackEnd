import {
  Movie,
  MovieReview,
  User,
  Cinema,
  ShowTime,
  GroupCinema,
} from 'database/models';
import { Op } from 'sequelize';
import moment from 'moment';

const movieService = {};
movieService.getAll = async ({ limit, offset }) => {
  return await Movie.findAll({
    limit: limit || 8,
    offset: offset || 8,
  });
};

movieService.getMovieByCinema = async () => {
  return await Cinema.findAll({
    include: [
      {
        model: Movie,
        as: 'movies',
      },
    ],
  });
};

movieService.getMovieById = async ({ id }) => {
  const now = moment();
  const startOfDate = now.startOf('date').format('');
  const endOfDate = now.endOf('date');

  return await Movie.findOne({
    where: {
      id,
    },
    include: [
      {
        model: ShowTime,
        as: 'showTimes',
        where: {
          startTime: {
            [Op.gte]: now,
          },
        },
        include: [
          {
            model: Cinema,
            as: 'cinema',
            include: [{ model: GroupCinema, as: 'groupCinema' }],
          },
        ],
      },
    ],
  });
};

movieService.getShowTime = async () => {
  const now = moment();
  const startOfDate = now.startOf('date').format('');
  const endOfDate = now.endOf('date');

  return await Movie.findOne({
    where: {
      id,
    },
    include: [
      {
        model: ShowTime,
        as: 'showTimes',
        where: {
          startTime: {
            [Op.gte]: now,
          },
        },
        include: [
          {
            model: Cinema,
            as: 'cinema',
            include: [{ model: GroupCinema, as: 'groupCinema' }],
          },
        ],
      },
    ],
  });
};

movieService.getMovieReviewsById = async ({ id }) => {
  const reviews = await MovieReview.findAll({
    include: [
      {
        model: User,
        as: 'user',
        required: false,
      },
    ],
    where: {
      movieId: id,
    },
    order: [['createdAt', 'DESC']],
  });
  return reviews;
};

movieService.createMovieReview = async (data) => {
  const { userId, movieId, content, rating } = data;
  const newReview = await MovieReview.create({
    userId,
    movieId,
    content,
    rating,
  });
  return newReview;
};

export default movieService;
