import movieService from 'services/movie.service';
import catchAsync from 'utils/catchAsync';

const movieControler = {};

movieControler.getAll = catchAsync(async (req, res) => {
  const { limit, offset } = req.query;
  const allMovie = await movieService.getAll({ limit, offset });
  res.send(allMovie);
});

export default movieControler;
