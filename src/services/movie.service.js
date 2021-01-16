import { Movie, Cinema } from 'database/models';

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

export default movieService;
