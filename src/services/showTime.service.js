import { ShowTime, Movie, Cinema } from 'database/models';
import httpStatus from 'http-status';
import ApiError from 'utils/ApiError';

const showTimeService = {};

showTimeService.getAllByMovieId = async (movieId) => {
  return await ShowTime.findAll({
    where: {
      movieId,
    },
  });
};

showTimeService.getByCinemaAndMovie = async (data) => {
  const { movieId, cinemaId } = data;
  return await ShowTime.findAll({
    include: [
      {
        model: Movie,
        where: { id: movieId },
        attributes: [],
      },
      {
        model: Cinema,
        where: { id: cinemaId },
        attributes: [],
      },
    ],
  });
};

export default showTimeService;
