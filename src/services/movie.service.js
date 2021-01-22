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

// Lấy tất cả các phim không limit
movieService.updateMovieById = async (
  director,
  duration,
  name,
  posterUrl,
  premiereTime,
  category,
  id,
) => {
  console.log(premiereTime);
  if (!premiereTime) {
    try {
      return await Movie.update(
        { director, duration, name, posterUrl, category },
        { where: { id: id } },
      );
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      return await Movie.update(
        { director, duration, name, posterUrl, category, premiereTime },
        { where: { id: id } },
      );
    } catch (error) {
      console.log(error);
    }
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
  const { limit, term } = data;
  return await Movie.findAll({
    limit: limit || 20,
    where: {
      name: {
        [Op.like]: `%${term}%`,
      },
    },
  });
};

export default movieService;
