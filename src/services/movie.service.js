import { Movie } from 'database/models';

const movieService = {};

movieService.getAll = async ({ limit, offset }) => {
  return await Movie.findAll({
    limit: limit || 8,
    offset: offset || 8,
  });
};
export default movieService;
