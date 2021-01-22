import {
  Movie,
  MovieReview,
  Transaction,
  User,
  Cinema,
  ShowTime,
  GroupCinema,
} from 'database/models';
import { Op } from 'sequelize';
import moment from 'moment';
import { showTimeService } from 'services';
import { pick } from 'utils/common';
import ApiError from 'utils/ApiError';
import httpStatus from 'http-status';

const movieService = {};
movieService.getAll = async ({ limit, offset }) => {
  const movies = await Movie.findAll({
    limit: limit || 8,
    offset: offset || 8,
    order: [['createdAt', 'DESC']],
    include: [{ model: MovieReview, as: 'movieReviews' }],
  });

  return movies;
};

// Lấy tất cả các phim không limit
movieService.getAllMovie = async () => {
  return await Movie.findAll({});
};

// Tạo phim
movieService.createMovie = async (
  director,
  duration,
  name,
  posterUrl,
  premiereTime,
  category,
  id,
  trailerUrl,
  description,
  language,
) => {
  if (!premiereTime) {
    throw new ApiError(
      httpStatus.NOT_ACCEPTABLE,
      'Vui lòng nhập vào thời điểm ra mắt',
    );
  } else {
    return await Movie.create({
      director,
      duration,
      name,
      posterUrl,
      category,
      premiereTime,
      trailerUrl,
      description,
      language,
      classify: 'P',
      casts: ['Wilhelm Thiel', 'Maynard Hayes'],
    });
  }
};

// Update phim theo id
movieService.updateMovieById = async (
  director,
  duration,
  name,
  posterUrl,
  premiereTime,
  category,
  id,
  trailerUrl,
  description,
  language,
) => {
  if (!premiereTime) {
    return await Movie.update(
      {
        director,
        duration,
        name,
        posterUrl,
        category,
        trailerUrl,
        description,
        language,
      },
      { where: { id: id } },
    );
  } else {
    return await Movie.update(
      {
        director,
        duration,
        name,
        posterUrl,
        category,
        premiereTime,
        trailerUrl,
        description,
        language,
      },
      { where: { id: id } },
    );
  }
};

const deleteAllTransactionANdMovieReview = async (id) => {
  // Tìm ra tất cả các showtime với movie đó
  const showTimes = await showTimeService.getAllByMovieId(id);
  // Xóa các movieReview
  MovieReview.destroy({
    where: {
      movieId: id,
    },
  });
  // Xóa các transaction
  for (let i = 0; i < showTimes.length; i++) {
    Transaction.destroy({
      where: {
        showTimeId: showTimes[i].id,
      },
    });
  }
};

const deleteAllShowTime = async (id) => {
  ShowTime.destroy({
    where: {
      movieId: id,
    },
  });
};

// Xóa 1 movie
movieService.deleteMovie = async (id) => {
  // Xóa các transaction liên quan đến movie
  await deleteAllTransactionANdMovieReview(id);

  // Xóa các showtime liên quan đến movie
  await deleteAllShowTime(id);

  // Xóa movie
  await Movie.destroy({
    where: {
      id: id,
    },
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
  return await Movie.findOne({
    where: {
      id,
    },
  });
};

// movieService.getShowTime = async (id) => {
//   const now = moment();
//   const startOfDate = now.startOf('date').format('');
//   const endOfDate = now.endOf('date');

//   return await Movie.findOne({
//     where: {
//       id,
//     },
//     include: [
//       {
//         model: ShowTime,
//         as: 'showTimes',
//         where: {
//           startTime: {
//             [Op.gte]: now,
//           },
//         },
//         include: [
//           {
//             model: Cinema,
//             as: 'cinema',
//             include: [{ model: GroupCinema, as: 'groupCinema' }],
//           },
//         ],
//       },
//     ],
//   });
// };

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

movieService.searchMovies = async (data) => {
  const { perPage = 8, term, page } = data;
  return await Movie.findAndCountAll({
    where: {
      name: {
        [Op.like]: `%${term}%`,
      },
    },
    distinct: true,
    include: [{ model: MovieReview, as: 'movieReviews' }],
    limit: perPage,
    offset: (page - 1) * perPage,
    order: [['updatedAt', 'DESC']],
  });
};

export default movieService;
