import { ShowTime } from 'database/models';
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

showTimeService.getBy;

export default showTimeService;
