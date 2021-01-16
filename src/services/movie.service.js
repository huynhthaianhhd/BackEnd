import { Movie, MovieReview, User, Cinema } from 'database/models';

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
  return await Movie.findOne({
    where: {
      id,
    },
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
